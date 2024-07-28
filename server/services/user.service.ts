import { NextFunction, Response } from "express";
import { redis } from "../utils/redis";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";

export const getUserById = async (id: string, res: Response) => {
	const user = await userModel.findById(id);

	res.status(201).json({
		success: true,
		user
	});
};

//Get all users
export const getAllUsersFromDB = async (res: Response) => {
	const users = await userModel.find().sort({ createdAt: -1 });
	res.status(201).json({
		success: true,
		users
	});
};

//update user role

export const updateUserRoleService = async (id: string, role: string, res: Response, next: NextFunction) => {
	const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}
	res.status(200).json({
		success: true,
		user
	});
};

//delete user

export const deleteUserService = async (id: string, res: Response, next: NextFunction) => {
	const user = await userModel.findByIdAndDelete(id);
	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}
	res.status(200).json({
		success: true,
		user
	});
};
