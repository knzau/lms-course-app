import mongoose, { Document, Model, Schema } from "mongoose";
import { courseDetails } from "../../client/src/utils/constants";

interface ILink extends Document {
	title: string;
	url: string;
}

interface IComment extends Document {
	user: object;
	comment: string;
	commentReplies?: IComment[];
}

interface IReview extends Document {
	user: object;
	rating: number;
	comment: string;
	commentReplies: IComment[];
}
interface ICourseDetails extends Document {
	title: string;
	description: string;
	videoUrl: string;
	videoThumbnaul: object;
	videoSection: string;
	videoLength: string;
	videoPlayer: string;
	links: ILink[];
	suggestion: string;
	questions: IComment[];
}

interface ICurriculumChapter {
	name: string;
	lessons: number;
	duration: string;
	topics: string[];
}

export interface ICurriculum {
	courseName: string;
	description: string;
	chapters: ICurriculumChapter[];
}

interface ICourse extends Document {
	title: string;
	course_id: string;
	summary: string;
	price: number;
	estimatedPrice?: number;
	tags?: string;
	description: string;
	thumbnail: string;
	createdBy: string;
	duration: string;
	demoUrl: string;
	level: string;
	benefits: string;
	skills: string[];
	prerequisites: { title: string }[];
	students: string;
	rating: number;
	purchased: number;
	reviews: IReview[];
	curriculum: ICurriculum;
	courseData: ICourseDetails;
}

const linkSchema = new mongoose.Schema<ILink>({
	title: String,
	url: String
});

const commentSchema = new mongoose.Schema<IComment>({
	user: Object,
	comment: String
});
const curriculumChapterSchema = new mongoose.Schema<ICurriculumChapter>({
	name: String,
	lessons: Number,
	duration: String,
	topics: [String]
});

const curriculumSchema = new mongoose.Schema<ICurriculum>({
	courseName: String,
	description: String,
	chapters: [curriculumChapterSchema]
});
const reviewSchema = new mongoose.Schema<IReview>({
	user: Object,
	rating: {
		type: Number,
		default: 0
	},
	comment: String
});

const courseDetailsSchema = new mongoose.Schema<ICourseDetails>({
	title: String,
	description: String,
	videoUrl: String,
	videoSection: String,
	videoLength: String,
	videoPlayer: String,
	links: [linkSchema],
	suggestion: String,
	questions: [commentSchema]
});

// create course schema
const courseSchema = new mongoose.Schema<ICourse>({
	title: {
		type: String,
		required: true
	},
	course_id: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	thumbnail: {
		public_id: {
			type: String
		},
		url: {
			type: String
		}
	},
	tags: {
		type: String,
		required: true
	},
	estimatedPrice: {
		type: Number
	},
	createdBy: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	benefits: [{ title: String }],
	prerequisites: [{ title: String }],
	demoUrl: {
		type: String,
		required: true
	},
	level: {
		type: String,
		required: true
	},
	skills: {
		type: [],
		required: true
	},
	students: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		default: 0
	},
	purchased: {
		type: Number,
		default: 0
	},
	reviews: [reviewSchema],
	curriculum: [curriculumSchema],
	courseData: [courseDetailsSchema]
});

const CourseModel: Model<ICourse> = mongoose.model("Course", courseSchema);

export default CourseModel;
