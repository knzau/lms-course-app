import { Request, Response, NextFunction } from "express";
import userModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import jwt, { Secret } from "jsonwebtoken";
import path from "path";
import ejs from "ejs";
import sendMail from "../utils/sendMail";

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
			await sendMail({ email: user.email, subject: "Account activation", template: "activation-mail", data });
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
