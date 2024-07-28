import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import orderModel from "../models/order.model";
import { log } from "console";

export const newOrder = catchAsyncError(async (data: any, res: Response, next: NextFunction) => {
	const order = await orderModel.create(data);
	console.log({ order });
	res.status(201).json({
		success: true,
		order: order
	});
});

export const getAllOrdersFromDB = async (res: Response) => {
	const orders = await orderModel.find().sort({ createdAt: -1 });
	res.status(201).json({
		success: true,
		orders
	});
};
