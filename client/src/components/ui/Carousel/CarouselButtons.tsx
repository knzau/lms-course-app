"use client";
import React, { ElementType } from "react";
import { Button } from "@/components/ui/Button";
import { useCarousel } from "@/components/ui/Carousel/CarouselRoot";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface ButtonWithIconProps extends React.ComponentProps<typeof Button> {
	icon?: React.ReactNode;
}

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { orientation, scrollPrev, canScrollPrev } = useCarousel();

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					"absolute  h-8 w-8 rounded-full",
					orientation === "horizontal"
						? "-left-12 top-1/2 -translate-y-1/2"
						: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
					className
				)}
				disabled={!canScrollPrev}
				onClick={scrollPrev}
				{...props}
			>
				{props.icon ?? <ArrowLeftIcon className="h-4 w-4" />}
				<span className="sr-only">Previous slide</span>
			</Button>
		);
	}
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { orientation, scrollNext, canScrollNext } = useCarousel();

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					"absolute h-8 w-8 rounded-full",
					orientation === "horizontal"
						? "-right-12 top-1/2 -translate-y-1/2"
						: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
					className
				)}
				disabled={!canScrollNext}
				onClick={scrollNext}
				{...props}
			>
				{props.icon ?? <ArrowRightIcon className="h-4 w-4" />}
				<span className="sr-only">Next slide</span>
			</Button>
		);
	}
);
CarouselNext.displayName = "CarouselNext";
