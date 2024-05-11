"use client";
import React from "react";
import { coursesSection } from "@/utils/constants";
import { Button } from "../ui/Button";
import CourseCard from "../common/CourseCard";

const CourseSection = () => {
	return (
		<div className="flex flex-col gap-10 lg:my-[120px] md:my-[80px]">
			<div>
				<h2 className="text-3xl font-bold mb-2">{coursesSection.title}</h2>
				<p className="text-lg">{coursesSection.description}</p>
			</div>

			<div className="grid justify-between gap-x-4 gap-y-8 lg:grid-cols-[repeat(auto-fit,_minmax(min-content,_305px))] md:grid-cols-[repeat(2,_minmax(min-content,max-content))]">
				{coursesSection.courses.map((course) => {
					return <CourseCard key={course.id} course={course} view="grid" />;
				})}
			</div>
			<Button variant="default" className="mx-auto w-[288px]">
				See More SkillBridge Courses &rarr;
			</Button>
		</div>
	);
};

export default CourseSection;
