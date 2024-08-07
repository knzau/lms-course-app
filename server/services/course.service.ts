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
		next(new ErrorHandler(error.message, 400));
	}
});

//Get all users
export const getAllCoursesFromDB = async (res: Response) => {
	const courses = await CourseModel.find().sort({ createdAt: -1 });
	res.status(201).json({
		success: true,
		courses
	});
};

//Delete course by id
export const deleteCourseService = async (id: string, res: Response, next: NextFunction) => {
	try {
		const course = await CourseModel.findByIdAndDelete(id);
		if (!course) {
			return next(new ErrorHandler("Course not found", 404));
		}
		res.status(201).json({
			success: true,
			course
		});
	} catch (error: any) {
		next(new ErrorHandler(error.message, 400));
	}
};
