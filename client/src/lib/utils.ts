import { type ClassValue, clsx } from "clsx";
import exp from "constants";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const isEmptyString = (text: string) => {
	return text.length === 0;
};

export const COURSES = "courses";
export const ABOUT = "about";
export const SIGNIN = "sign-in";

interface PagePaths {
	[key: string]: string;
}
const pagePaths: PagePaths = {
	[COURSES]: "/courses",
	[ABOUT]: "/about",
	[SIGNIN]: "/sign-in"
};

export const mapPathName = (pathName: string) => {
	return pagePaths[pathName];
};
