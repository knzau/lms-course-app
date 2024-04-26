"use client";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { coursesFilterOptions, GRID, LIST } from "@/utils/constants";
import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { coursesSection } from "@/utils/constants";
import CourseCard from "@/components/common/CourseCard";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import SortingButtons from "../../components/common/SortingButtons";
import { cn } from "@/lib/utils";

const Courses = () => {
	const sortOptions = [
		{ label: "Best Match", value: "best-match" },
		{ label: "Newest", value: "newest" }
	];

	const [selectedSortOption, setSelectedSortOption] = React.useState(sortOptions[0]?.label || "");
	const [view, setView] = React.useState(LIST);

	const isList = view === LIST;
	const isGrid = view === GRID;

	const handleSortChange = (value: string) => {
		setSelectedSortOption(value);
	};
	const handleViewChange = (view: string) => {
		setView(view);
	};
	const fetchMoreCourses = () => {
		//Api call to fetch more courses
		console.log("Fetching more courses");
	};

	return (
		<MaxWidthWrapper className="flex flex-col  mt-[112px] lg:py-[100px] py-[40px]">
			<div className="flex gap-4 justify-between w-full min-h-[100%]">
				<div
					className={cn("basis-[25%]", {
						"basis-[30%]": isList
					})}
				>
					<div className="h-[48px] flex items-center">
						<h3 className="text-xl font-semibold">Filter by</h3>
					</div>

					{Object.entries(coursesFilterOptions).map(([filterGroup, filters]) => {
						const hasMore = filters.length > 4;
						const firstFilters = filters.slice(0, 4);
						return (
							<div key={filterGroup} className="py-5 border-b-[1px]">
								<h3 className="text-lg font-semibold capitalize mb-2">{filterGroup}</h3>
								<div className="flex flex-col gap-4 items-start">
									{firstFilters.map((filter, index) => {
										return (
											<div key={filter.id} className="flex items-center gap-4">
												<Checkbox
													className="border-input rounded-[3px]"
													id={filter.id}
													name={filter.label}
												/>
												<label
													htmlFor="terms1"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													{filter.label}
												</label>
											</div>
										);
									})}
									{hasMore && (
										<span
											className="border-b-[1px] text-input text-sm cursor-pointer hover:text-primary"
											onClick={() => {}}
										>
											Show more
										</span>
									)}
								</div>
							</div>
						);
					})}
				</div>
				<div
					className={cn("basis-[75%]", {
						"basis-70%": isList
					})}
				>
					<SortingButtons
						sortOptions={sortOptions}
						onSort={handleSortChange}
						handleViewChange={handleViewChange}
						sortSelected={selectedSortOption}
						selectedView={view}
					/>
					<div>
						<div
							className={cn("w-full grid justify-between gap-x-4 gap-y-2", {
								"lg:grid-cols-[repeat(auto-fit,_minmax(min-content,_305px))] md:grid-cols-[repeat(2,_minmax(min-content,max-content))]":
									isGrid
							})}
						>
							{coursesSection.courses.map((course) => {
								return (
									<CourseCard
										key={course.id}
										classProps=" mb-10 drop-shadow-md bg-white"
										course={course}
										view={view}
									/>
								);
							})}
							<Button className="mx-auto w-[288px] flex" onClick={fetchMoreCourses}>
								See More SkillBridge Courses{" "}
								<span className="ml-2">
									<ArrowDownIcon />
								</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Courses;
