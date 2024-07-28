import { Request, Response, NextFunction } from "express";
import userModel, { IUser } from "../models/user.model";
import { redis } from "../utils/redis";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import path from "path";
import ejs from "ejs";
import sendMail from "../utils/sendMail";
import { accessTokenOptions, refreshTokenOptions, sendToken } from "../utils/jwt";

import { deleteUserService, getAllUsersFromDB, getUserById, updateUserRoleService } from "../services/user.service";
import cloudinary from "cloudinary";

// register user
interface IRegisterUser {
	name: string;
	email: string;
	password: string;
	avatar?: string;
}

interface IActivationToken {
	token: string;
	activationCode: string;
}

export const createActivationToken = (user: IRegisterUser): IActivationToken => {
	const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

	const token = jwt.sign({ user, activationCode }, process.env.ACTIVATION_SECRET as Secret, { expiresIn: "5m" });

	return { token, activationCode };
};

export const registrationUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, email, password } = req.body;

		const isEmailExists = await userModel.findOne({ email });
		if (isEmailExists) {
			return next(new ErrorHandler("Email already exists", 400));
		}
		const user: IRegisterUser = { name, email, password };

		const activationToken = createActivationToken(user);
		const activationCode = activationToken.activationCode;

		const data = { user: { name: user.name }, activationCode };
		const html = await ejs.renderFile(path.join(__dirname, "../mails/activation-mail.ejs"), data);

		try {
			await sendMail({
				name: user.name,
				email: user.email,
				subject: "Account activation",
				template: "activation-mail",
				data
			});
			res.status(201).json({
				success: true,
				message: `Account created successfully. Please check your email ${user.email} to activate your account`,
				activationToken: activationToken
			});
		} catch (error: any) {
			return next(new ErrorHandler(error.message, 400));
		}
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

interface IActivationRequest {
	activation_token: string;
	activation_code: string;
}
export const activateUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { activation_token, activation_code } = req.body as IActivationRequest;
		const newUser: { user: IUser; activationCode: string } = jwt.verify(
			activation_token,
			process.env.ACTIVATION_SECRET as string
		) as { user: IUser; activationCode: string };

		if (newUser.activationCode !== activation_code) {
			return next(new ErrorHandler("Invalid activation code", 400));
		}
		const { name, email, password } = newUser.user;

		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			return next(new ErrorHandler("User already exists", 400));
		}

		const user = await userModel.create({ name, email, password });
		res.status(201).json({
			success: true
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

//Login user
interface ILoginRequest {
	email: string;
	password: string;
}
export const loginUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body as ILoginRequest;

		if (!email || !password) {
			return next(new ErrorHandler("Please enter email and password", 400));
		}
		const user = await userModel.findOne({ email }).select("+password");

		if (!user) {
			return next(new ErrorHandler("Invalid email or password", 401));
		}
		const isPasswordMatched = await user.comparePassword(password);

		if (!isPasswordMatched) {
			return next(new ErrorHandler("Invalid email or password", 401));
		}

		sendToken(user, 200, res);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 401));
	}
});

export const logoutUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.cookie("access_token", "", { maxAge: 1 });
		res.cookie("refresh_token", "", { maxAge: 1 });
		const userId = req.user?._id || "";
		redis.del(userId);
		res.status(200).json({
			success: true,
			message: "Logged out successfully"
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

export const updateAccessToken = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const refresh_token = req.cookies.refresh_token as string;
		const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN as Secret) as JwtPayload;
		const errorMsg = "Could not refresh token";
		if (!decoded) {
			return next(new ErrorHandler(errorMsg, 401));
		}

		const session = await redis.get(decoded.id as string);
		if (!session) {
			return next(new ErrorHandler(errorMsg, 401));
		}
		const user = JSON.parse(session);

		const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN as string, { expiresIn: "5m" });
		const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN as string, {
			expiresIn: "3d"
		});

		req.user = user;

		res.cookie("access_token", accessToken, accessTokenOptions);
		res.cookie("refresh_token", refreshToken, refreshTokenOptions);
		res.status(200).json({
			success: true,
			accessToken: accessToken
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 401));
	}
});

export const getUserInfo = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const userId = req.user?._id;
		getUserById(userId, res);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

interface ISocialAuthBody {
	email: string;
	name: string;
	avatar: string;
}

export const socialAuth = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, name, avatar } = req.body as ISocialAuthBody;

		const user = await userModel.findOne({ email });
		if (!user) {
			const newUser = await userModel.create({ email, name, avatar });
			sendToken(newUser, 200, res);
		} else {
			sendToken(user, 200, res);
		}
	} catch (error) {}
});

interface IUpdateUserInfo {
	name?: string;
	email?: string;
}
export const updateUserInfo = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, email } = req.body as IUpdateUserInfo;

		const userId = req.user?._id;
		const user = await userModel.findById(userId);
		if (email && user) {
			const isExistingEmail = await userModel.findOne({ email });
			if (isExistingEmail) {
				return next(new ErrorHandler("Email already exist", 400));
			}
			user.email = email;
		}
		if (name && user) {
			user.name = name;
		}

		await user?.save();
		await redis.set(userId, JSON.stringify(user));

		res.status(201).json({ success: true, user });
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

//update user password
interface IUpdatePassword {
	oldPassword: string;
	newPassword: string;
}

export const updateUserPassword = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { oldPassword, newPassword } = req.body as IUpdatePassword;

		const user = await userModel.findById(req.user?._id).select("+password");

		if (!user?.password) {
			return next(new ErrorHandler("Invalid users", 400));
		}
		const isPasswordMatch = await user?.comparePassword(oldPassword);
		if (!isPasswordMatch) {
			return next(new ErrorHandler("Invalid old password", 400));
		}

		user.password = newPassword;

		await user.save();
		await redis.set(req.user?._id, JSON.stringify(user));

		res.status(201).json({
			success: true,
			user
		});
	} catch (error: any) {
		next(new ErrorHandler(error.message, 400));
	}
});

interface IUpdateProfilePicture {
	avatar: string;
}

export const updateProfilePicture = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { avatar } = req.body;
		const userId = req.user?._id;
		const user = await userModel.findById(userId);

		if (avatar && user) {
			if (user?.avatar?.public_id) {
				await cloudinary.v2.uploader.destroy(user?.avatar.public_id);
			}
			const myCloud = await cloudinary.v2.uploader.upload(avatar, {
				folder: "avatars",
				width: 150
			});

			user.avatar = {
				public_id: myCloud.public_id,
				url: myCloud.secure_url
			};
		}
		await user?.save();
		await redis.set(userId, JSON.stringify(user));
		res.status(200).json({ success: true, user });
	} catch (error: any) {
		next(new ErrorHandler(error.message, 400));
	}
});

//get all users -- only for admin
export const getAllUsers = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		getAllUsersFromDB(res);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

// update user role -- only for admin
export const updateUserRole = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id, role } = req.body;
		updateUserRoleService(id, role, res, next);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

// delete user -- only for admin
export const deleteUserById = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		deleteUserService(id, res, next);
		await redis.del(id);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});
