"use client";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { courseCategories, navMenuItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { cn, COURSES, mapPathName } from "@/lib/utils";
import { SearchInput } from "../ui/Input/SearchInput";
import { SearchComboBox } from "../common/SearchComboBox";

const NavBar = () => {
	const pathname = usePathname();
	const isCoursesPath = mapPathName(COURSES) === pathname;

	const NavigationItems = () => (
		<ul className="hidden md:flex gap-8">
			{Object.entries(navMenuItems).map(([link, title]) => {
				return (
					<Link
						className={cn("text-foreground", {
							"font-bold border-b-4 pb-4 text-primary border-primary": pathname === mapPathName(link)
						})}
						key={link}
						href={link}
					>
						{title}
					</Link>
				);
			})}
		</ul>
	);

	return (
		<div className="w-full h-[112px] fixed z-50">
			{!isCoursesPath && (
				<div className="flex w-full bg-secondary justify-center text-input text-sm h-8 items-center">
					Free Courses 🌟 Sale Ends Soon, Get It Now &rarr;
				</div>
			)}
			<div className="w-full bg-white">
				<MaxWidthWrapper className="flex gap-4 h-[80px] items-center justify-between  w-full">
					<Link href="/">
						<Image src="/SkillBridgeLogo.svg" width={238} height={44} alt="logo" />
					</Link>
					{isCoursesPath ? (
						<>
							<SearchComboBox defaultValue="Subject" frameworks={courseCategories} />
							<SearchInput wrapperClass="max-w-[40%]" placeHolder="What do you want to learn?" />
						</>
					) : (
						<NavigationItems />
					)}
					<div className="flex gap-8">
						<Button>Register for Free</Button>
						<Button variant="outline">Login</Button>
					</div>
				</MaxWidthWrapper>
			</div>
			{isCoursesPath && (
				<div className="lg:py-4 bg-white">
					<MaxWidthWrapper className="">
						<NavigationItems />
					</MaxWidthWrapper>
					<hr className="h-1 text-border" />
				</div>
			)}
		</div>
	);
};

export default NavBar;
