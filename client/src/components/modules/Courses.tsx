"use client";
import React from "react";
import { coursesSection, myLoader } from "@/utils/constants";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/Button";

const Courses = () => {
	return (
		<div className="flex flex-col gap-10 lg:my-[120px] md:my-[80px]">
			<div>
				<h2 className="text-3xl font-bold mb-2">{coursesSection.title}</h2>
				<p className="text-lg">{coursesSection.description}</p>
			</div>

			<div className="grid justify-between gap-x-4 gap-y-8 lg:grid-cols-[repeat(auto-fit,_minmax(min-content,_305px))] md:grid-cols-[repeat(2,_minmax(min-content,max-content))]">
				{coursesSection.courses.map((course) => (
					<div key={course.id} className="flex lg:flex-col gap-10 p-4 border-[1px] rounded-md md:flex-row">
						<div className="border-radius">
							<Image
								loader={myLoader}
								width={275}
								height={180}
								src={course.thumbnail}
								alt={course.title}
							/>
						</div>
						<div>
							<h3 className="text-lg font-bold">{course.title}</h3>
							<p className="text-sm line-clamp-2">{course.description}</p>
							<div className="w-full flex justify-between items-center mt-2">
								<span className="flex gap-2 items-center">
									{course.rating}
									<StarFilledIcon className="text-primary" />
								</span>
								<span className="text-primary font-bold">{course.students}</span>
							</div>
							<div className="flex items-center mt-4 justify-between">
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
				))}
			</div>
			<Button variant="default" className="mx-auto w-[288px]">
				See More SkillBridge Courses &rarr;
			</Button>
		</div>
	);
};

export default Courses;
