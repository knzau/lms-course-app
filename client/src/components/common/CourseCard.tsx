import Image from "next/image";
import { Course, GRID, LIST, myLoader } from "@/utils/constants";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface CourseCardProps {
	course: Course;
	view?: string;
	classProps?: string;
	navigateToCourse: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, classProps, view = GRID, navigateToCourse }) => {
	const isList = view === LIST;
	const isGrid = view === GRID;

	return (
		<div
			key={course.course_id}
			className={cn(
				"flex gap-10 p-4 border-[1px] rounded-md md:flex-row drop-shadow-sm",
				{
					"lg:flex-row flex-col mb-10": isList,
					"lg:flex-col": isGrid
				},
				classProps
			)}
			onClick={() => navigateToCourse(course.course_id)}
		>
			<Image
				loader={myLoader}
				width={275}
				height={180}
				src={course.thumbnail}
				alt={course.title}
				className={cn("rounded-lg", {
					"w-full h-full lg:w-[255px] lg:h-[180px] object-cover": isList
				})}
			/>

			<div className={cn("flex flex-col gap-y-1")}>
				<h3 className="text-lg font-bold">{course.title}</h3>
				<p>{course.createdBy}</p>
				<div className="my-2 flex flex-col flex-wrap">
					{isList ? (
						<p className="text-sm">
							<strong> Skills you&rsquo;ll gain: </strong>
							{course.skills?.join(", ")}
						</p>
					) : (
						<p className="text-sm line-clamp-2">{course.summary}</p>
					)}
				</div>

				<div className="w-full flex gap-4 items-center">
					<span className="flex gap-2 items-center">
						{course.rating}
						<StarFilledIcon className="text-primary" />
					</span>
					<span className="text-primary font-bold">{course.students} Students</span>
				</div>
				<div className="flex items-center mt-2 gap-4">
					<span className="flex gap-2 text-sm">
						<Image alt="brands that trust us" src="/icons/Union.svg" width={16} height={16} />
						{course.level}
					</span>
					<span className="flex gap-2 text-[14px]">
						{<Image alt="brands that trust us" src="/icons/clock.svg" width={16} height={16} />}
						{course.duration}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
