import mongoose, { Document, Model, Schema } from "mongoose";
import { courseDetails } from "../../client/src/utils/constants";

interface ILink extends Document {
	title: string;
	url: string;
}

interface IComment extends Document {
	user: object;
	comment: string;
}

interface ICourseDetails extends Document {
	title: string;
	description: string;
	videoUrl: string;
	videoThumbnaul: object;
	videSection: string;
	videoLength: string;
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
	description: string;
	thumbnail: string;
	createdBy: string;
	duration: string;
	demoUrl: string;
	level: string;
	skills: string[];
	students: string;
	rating: string;
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

const courseDetailsSchema = new mongoose.Schema<ICourseDetails>({
	title: String,
	description: String,
	videoUrl: String,
	videSection: String,
	videoLength: String,
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
	createdBy: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
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
		type: String,
		required: true
	},
	curriculum: [curriculumSchema],
	courseData: [courseDetailsSchema]
});

const CourseModel: Model<ICourse> = mongoose.model("Course", courseSchema);

export default CourseModel;
