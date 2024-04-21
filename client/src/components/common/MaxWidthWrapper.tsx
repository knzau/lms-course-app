import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

const MaxWidthWrapper = forwardRef<HTMLDivElement, { className?: string; children: ReactNode }>(
	({ className, children }, ref) => {
		return (
			<div ref={ref} className={cn("mx-auto w-full max-w-screen-xxl lg:px-5 px-2.5", className)}>
				{children}
			</div>
		);
	}
);

MaxWidthWrapper.displayName = "MaxWidthWrapper";

export default MaxWidthWrapper;
