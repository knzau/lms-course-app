import { NextFunction, Response, Request } from "express";
import ErrorHandler from "../utils/ErrorHandler";
export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	const status = err.statusCode || 500;
	err.mesage = err.message || "Internal Server Error";

	// wrong mongodb id error
	if (err.name === "CastError") {
		const message = `Resource not found. Invalid ${err.path}`;
		err = new ErrorHandler(message, 400);
	}

	//duplicate key error
	if (err.code === 11000) {
		const message = `Duplicate key error: ${Object.keys(err.keyValue)} already exists`;
		err = new ErrorHandler(message, 400);
	}

	// wrong just error
	if (err.name === "JsonWebTokenError") {
		const message = "Invalid JWT token";
		err = new ErrorHandler(message, 401);
	}

	// JWT expired error
	if (err.name === "TokenExpiredError") {
		const message = "JWT expired";
		err = new ErrorHandler(message, 401);
	}

	res.status(err.statusCode).json({
		success: false,
		error: err.message
	});
};
