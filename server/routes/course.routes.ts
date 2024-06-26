import express from "express";
import {
	editCourse,
	getAllCourses,
	getCourseByUser,
	getSingleCourse,
	uploadCourse
} from "../controllers/course.controller";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post("/create-course", isAuthenticated, authorizeRoles("admin"), uploadCourse);

courseRouter.put("/edit-course/:id", isAuthenticated, authorizeRoles("admin"), editCourse);

courseRouter.get("/get-course/:id", isAuthenticated, getSingleCourse);

courseRouter.get("/get-courses", isAuthenticated, getAllCourses);

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

export default courseRouter;
