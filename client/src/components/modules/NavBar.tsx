"use client";
import Image from "next/image";
// import Logo from "../../public/assets/SkillBridgeLogo.svg";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { navMenuItems } from "@/utils/constants";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
	return (
		<>
			<div className="flex w-full bg-secondary justify-center text-input text-sm h-8 items-center">
				Free Courses 🌟 Sale Ends Soon, Get It Now &rarr;
			</div>
			<MaxWidthWrapper className="flex gap-4 h-[80px] items-center justify-between bg-white">
				<Image src="/SkillBridgeLogo.svg" width={238} height={44} alt="logo" />

				<ul className="hidden md:flex gap-8">
					{Object.entries(navMenuItems).map(([link, title]) => {
						return (
							<Link key={link} href={link}>
								{title}
							</Link>
						);
					})}
				</ul>
				<div className="flex gap-8">
					<Button>Register for Free</Button>
					<Button variant="outline">Login</Button>
				</div>
			</MaxWidthWrapper>
		</>
	);
};

export default NavBar;
