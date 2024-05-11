import { Course, coursesSection } from "@/utils/constants";

const useCourse = ({ id }: { id: string }) => {
	//Todo: get course by id
	const course = coursesSection.courses.find((course: Course) => course.id === id);
	return { course };
};

export default useCourse;
