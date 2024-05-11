"use client";
import { useParams } from "next/navigation";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SubscriptionComponent from "@/components/common/SubscriptionComponent";
import useCourse from "@/hooks/useCourse";
import NotFound from "@/components/common/NotFound";
import Image from "next/image";
import { myLoader } from "@/utils/constants";
import { cn } from "@/lib/utils";
import { BarChartIcon, ClockIcon, GlobeIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Certificate from "@/components/common/Certificate";
import CurriculumComponent from "@/components/modules/CurriculumComponent";
import Faqs from "@/components/modules/Faqs";
const Page = () => {
	const { id } = useParams();
	const { course } = useCourse({ id: id as string });

	return course ? (
		<MaxWidthWrapper className="flex flex-col  mt-[112px] lg:py-[100px] py-[40px] h-full">
			<div className="flex md:flex-row gap-5 justify-between w-full min-h-[100%] flex-col items-start">
				<div className="md:basis-[60%]">
					<h2 className="text-[42px] font-bold">{course.title}</h2>
					<p className="text-sm text-secondary-foreground my-4">Created by {course.createdBy}</p>
					<p className="text-textPrimary">{course.description}</p>
					<div className="relative w-full h-[400px] my-5">
						<Image
							loader={myLoader}
							fill
							priority
							src={course.thumbnail}
							alt={course.title}
							className={cn("rounded-lg w-full h-full object-cover")}
						/>
					</div>
					<div className="flex justify-between font-semibold">
						<span className="text-muted-foreground flex gap-2 items-center capitalize">
							<BarChartIcon /> {course.level}
						</span>
						<span className="text-muted-foreground flex gap-2 items-center capitalize">
							<ClockIcon />
							{course.duration}
						</span>
						<span className="text-muted-foreground flex gap-2 items-center capitalize">
							<StarFilledIcon />
							{course.rating}
						</span>
						<span className="text-muted-foreground flex gap-2 items-center capitalize">
							<GlobeIcon />
							{course.language}
						</span>
					</div>

					<div className="my-8">
						<h3 className="font-bold text-2xl mb-4">Skills you'll gain</h3>
						<p className="text-base mb-4 text-textPrimary">
							Develop a portfolio showcasing your skills and abilities to potential employers.
						</p>
						<div className="flex flex-wrap gap-3 my-2">
							{course.skills?.map((skill) => (
								<span key={skill} className="capitalize text-sm bg-muted p-2 rounded-sm">
									{skill}
								</span>
							))}
						</div>
					</div>
					<Certificate />
					<CurriculumComponent curriculum={course.curriculum} />
					<Faqs isCoursePage={true} />
				</div>
				<SubscriptionComponent className="md:basis-[40%] px-5" />
			</div>
		</MaxWidthWrapper>
	) : (
		<MaxWidthWrapper className="flex flex-col  mt-[112px] lg:py-[100px] py-[40px] h-full">
			<NotFound message="Sorry, The course was not found." />
		</MaxWidthWrapper>
	);
};

export default Page;
