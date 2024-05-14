require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/errorMiddleware";
import userRouter from "./routes/user.routes";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/v1", userRouter);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ success: true, message: "Test endpoint" });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
	const err = new Error(`Route ${req.originalUrl} not found`) as any;
	err.statusCode = 404;
	next(err);
});

app.use(errorMiddleware);