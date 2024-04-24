import { cn, isEmptyString } from "@/lib/utils";
import { footerSections } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

export default function Footer() {
	return (
		<footer className="flex gap-4 flex-col items-center">
			<MaxWidthWrapper className="flex flex-col md:flex-row gap-8 justify-between lg:pt-[120px] pt-[40px]">
				{Object.entries(footerSections).map(([key, sections]) => {
					const isSocial = key === "socialIcons";
					return (
						<div
							key={"footer-section" + key}
							className={cn("grid gap-4 w-[40%] relative", {
								"flex flex-wrap justify-end": isSocial
							})}
						>
							{isSocial && <h4 className="font-bold absolute text-lg ">Get in Touch!</h4>}
							{sections.map((section, index) => {
								const iconDimenstions = key === "logo" ? 145 : 17;

								return (
									<Link
										className={cn("flex flex-row gap-2")}
										href={section.link}
										key={"footer-item" + index}
									>
										{!isEmptyString(section.icon) && (
											<Image
												width={iconDimenstions}
												height={iconDimenstions}
												alt="footer"
												src={section.icon}
											/>
										)}
										{
											<span
												className={cn("text-sm text-foreground", {
													"text-lg font-bold": index === 0
												})}
											>
												{section.label}
											</span>
										}
									</Link>
								);
							})}
						</div>
					);
				})}
			</MaxWidthWrapper>
			<MaxWidthWrapper className="text-center py-12">
				<hr className="text-gray-500 h-[1px] pb-8 w-full" />
				<p>© 2024 Skillbridge. All rights reserved.</p>
			</MaxWidthWrapper>
		</footer>
	);
}
