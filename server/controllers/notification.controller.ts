import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import NotificationModel from "../models/notification.model";
import ErrorHandler from "../utils/ErrorHandler";

export const getNotifications = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const notifications = await NotificationModel.find().sort({ createdAt: -1 });

		res.status(200).json({
			success: true,
			notifications
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.msg, 500));
	}
});

export const updateNotification = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const notification = await NotificationModel.findById(req.params.id);

		if (!notification) {
			return next(new ErrorHandler("Notification not found", 404));
		} else {
			notification.status ? (notification.status = "read") : notification.status;
		}

		await notification.save();

		const notifications = await NotificationModel.find().sort({ createdAt: -1 });

		res.status(200).json({
			success: true,
			notifications
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.msg, 500));
	}
});
