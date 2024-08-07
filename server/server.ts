import { app } from "./app";
import connectDB from "./utils/db";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_SECRET
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	connectDB();
});
