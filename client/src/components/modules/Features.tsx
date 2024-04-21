"use client";
import Image from "next/image";
import React from "react";
import { featuresSection, myLoader } from "../../utils/constants";
import parse from "html-react-parser";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Button } from "../ui/Button";

const Features = () => {
	return (
		<MaxWidthWrapper className="flex flex-col lg:flex-row gap-10 justify-around lg:my-[120px] my-[80px] items-center">
			<div>
				<Image
					loader={myLoader}
					src={featuresSection.img}
					width={610}
					height={596}
					quality={100}
					alt="learn and grow"
				/>
			</div>
			<div>
				<h2 className="font-bold text-4xl pb-2 text-primary">{featuresSection.title}</h2>
				<p className="text-lg pb-5">{featuresSection.description}</p>
				<div className="max-w-[600px] mb-8 flex-row gap-y-7 justify-between items-center ">
					{featuresSection.features.map((feature, index) => {
						return (
							<div key={index} className="flex gap-x-2 items-start py-1">
								<Image
									src="/icons/cube.svg"
									width={14.4}
									height={16.2}
									alt="cube-icon"
									className="py-1"
								/>
								<span>{parse(feature)}</span>
							</div>
						);
					})}
				</div>
				<Button>Join for Free</Button>
			</div>
		</MaxWidthWrapper>
	);
};

export default Features;
