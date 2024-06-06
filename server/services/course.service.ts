import { NextFunction, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import CourseModel from "../models/course.model";
import ErrorHandler from "../utils/ErrorHandler";

export const createCourse = catchAsyncError(async (data: any, res: Response, next: NextFunction) => {
	try {
		const course = await CourseModel.create(data);

		res.status(201).json({
			success: true,
			course
		});
	} catch (error: any) {
		console.log({ error });

		next(new ErrorHandler(error.message, 400));
	}
});
