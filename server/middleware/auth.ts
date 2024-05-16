import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";
import { redis } from "../utils/redis";

export const isAuthenticated = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	const accessToken = req.cookies.access_token;
	console.log({ signedcooks: req.cookies });

	if (!accessToken) {
		return next(new ErrorHandler("Login is required", 401));
	}

	const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN as string);
	console.log({ decoded });

	if (!decoded) {
		return next(new ErrorHandler("Invalid access token", 401));
	}
	console.log({ decoded });

	const user = await redis.get(decoded.id);
	if (!user) {
		return next(new ErrorHandler("User not found", 401));
	}

	req.user = JSON.parse(user);
	next();
});

//validate user roles
export const authorizeRoles = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!roles.includes(req.user?.role || "")) {
			return next(new ErrorHandler("Role not authorized", 403));
		}
		next();
	};
};
