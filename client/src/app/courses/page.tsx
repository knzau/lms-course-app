"use client";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { coursesFilterOptions } from "@/utils/constants";
import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

const Courses = () => {
	return (
		<MaxWidthWrapper className="flex flex-col  mt-[112px] lg:py-[100px] py-[40px]">
			<div className="flex gap-4 justify-between w-full min-h-[100%]">
				<div className=" basis-[30%]">
					{Object.entries(coursesFilterOptions).map(([filterGroup, filters]) => {
						const hasMore = filters.length > 4;
						const firstFilters = filters.slice(0, 4);
						return (
							<div key={filterGroup} className="py-6 border-b-[1px]">
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
				<div className="basis-[70%] bg-slate-300">Course grid</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Courses;
