import cloudinary from "cloudinary";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { createCourse } from "../services/course.service";
import { redis } from "../utils/redis";
import CourseModel, { IComment } from "../models/course.model";
import mongoose from "mongoose";
import NotificationModel from "../models/notification.model";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";

export const uploadCourse = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = req.body;

		const thumbnail = data.thumbnail;
		if (thumbnail) {
			const myCloud = await cloudinary.v2.uploader.upload(thumbnail, { folder: "courses" });

			data.thumbnail = {
				public_id: myCloud.public_id,
				url: myCloud.secure_url
			};
		}
		createCourse(data, res, next);
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

//edit course
export const editCourse = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = req.body;
		const thumbnail = data.thumbnail;

		if (thumbnail) {
			await cloudinary.v2.uploader.destroy(thumbnail.public_id);

			const myCloud = await cloudinary.v2.uploader.upload(thumbnail.url, { folder: "courses" });

			data.thumbnail = {
				public_id: myCloud.public_id,
				url: myCloud.secure_url
			};
		}

		const courseId = req.params.id;

		const course = await CourseModel.findByIdAndUpdate(
			courseId,
			{
				$set: data
			},
			{
				new: true
			}
		);

		res.status(201).json({
			success: true,
			course
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

export const getSingleCourse = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const courseId = req.params.wwid;
		const isCourseExistingInCache = await redis.get(courseId);
		if (isCourseExistingInCache) {
			const course = JSON.parse(isCourseExistingInCache);
			res.status(200).json({ success: true, course });
		} else {
			const course = await CourseModel.findById(req.params.id).select(
				"-couseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
			);

			await redis.set(courseId, JSON.stringify(course));
			res.status(200).json({
				success: true,
				course
			});
		}
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

export const getAllCourses = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const coursesExistingInCache = await redis.get("allCourses");

		if (coursesExistingInCache) {
			const courses = JSON.parse(coursesExistingInCache);
			res.status(200).json({ success: true, courses });
		} else {
			const courses = await CourseModel.find().select(
				"-couseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
			);
			await redis.set("allCourses", JSON.stringify(courses));
			res.status(200).json({
				success: true,
				courses
			});
		}
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

export const getCourseByUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const userCourseList = req.user?.courses;

		const courseId = req.params.id;
		const courseExists = userCourseList?.find((course: any) => course._id.toString() === courseId);

		if (!courseExists) {
			return next(new ErrorHandler("You are not elligible to access this course", 404));
		}

		const course = await CourseModel.findById(courseId);

		res.status(200).json({ success: true, course });
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 400));
	}
});

// add question in course
interface IAddQuestionData {
	question: string;
	courseId: string;
	contentId: string;
}

export const addQuestion = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { question, courseId, contentId }: IAddQuestionData = req.body;
		const course = await CourseModel.findById(courseId);

		if (!mongoose.Types.ObjectId.isValid(contentId)) {
			return next(new ErrorHandler("Invalid content id", 400));
		}
		const courseContent = course?.courseData?.find((item: any) => item._id.equals(contentId));

		if (!courseContent) {
			return next(new ErrorHandler("Content not found", 404));
		}
		const newQuestion: any = {
			user: req.user,
			question,
			questionReplies: []
		};

		courseContent.questions.push(newQuestion);

		await NotificationModel.create({
			user: req.user?._id,
			title: "New Question Added",
			message: `New question added in ${course?.title}`
		});

		await course?.save();
		res.status(201).json({
			success: true,
			course
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});

interface IAddReviewData {
	answer: string;
	courseId: string;
	contentId: string;
	questionId: string;
}

export const addAnswer = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { answer, courseId, contentId, questionId }: IAddReviewData = req.body;
		const course = await CourseModel.findById(courseId);
		if (!mongoose.Types.ObjectId.isValid(contentId)) {
			return next(new ErrorHandler("Invalid content id", 400));
		}
		const courseContent = course?.courseData?.find((item: any) => item._id.equals(contentId));

		const question = courseContent?.questions?.find((item: any) => item._id.equals(questionId));

		if (!question) {
			return next(new ErrorHandler("Question not found", 404));
		}
		const newAnswer: any = {
			user: req.user,
			answer
		};
		console.log({ question });

		await question?.questionReplies?.push(newAnswer);

		await NotificationModel.create({
			user: req.user?._id,
			title: "New Answer Added",
			message: `New answer added in ${course?.title}`
		});

		await course?.save();
		if (req.user?._id === question.user._id) {
			//create notification for user who asked the question
			await NotificationModel.create({
				userId: question.user._id,
				title: "New Answer Added",
				message: `New answer added in ${course?.title}`
			});
		} else {
			const data = {
				name: question.user.name,
				title: courseContent?.title
			};

			const html = await ejs.renderFile(path.join(__dirname, "../mails/question-reply.ejs"), data);

			try {
				await sendMail({
					email: question.user.email,
					subject: "Question Reply",
					template: "question-reply.ejs",
					data
				});
			} catch (error: any) {
				return next(new ErrorHandler(error.message, 500));
			}
		}
		res.status(201).json({
			success: true,
			course
		});
	} catch (error: any) {
		return next(new ErrorHandler(error.message, 500));
	}
});
