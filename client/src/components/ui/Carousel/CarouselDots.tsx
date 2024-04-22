"use client";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { cn } from "@/lib/utils";

export type UseDotButtonType = {
	selectedIndex: number;
	scrollSnaps: number[];
	onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
	emblaApi: EmblaCarouselType | undefined,
	onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onDotButtonClick = useCallback(
		(index: number) => {
			if (!emblaApi) return;
			emblaApi.scrollTo(index);
			if (onButtonClick) onButtonClick(emblaApi);
		},
		[emblaApi, onButtonClick]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return {
		selectedIndex,
		scrollSnaps,
		onDotButtonClick
	};
};

type PropType = PropsWithChildren<
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const DotButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<button type="button" {...restProps}>
			{children}
		</button>
	);
};

export const CarouselDotButtons = ({ scrollSnaps, selectedIndex, onDotButtonClick }: UseDotButtonType) => {
	return (
		<div className="flex flex-wrap justify-center gap-x-4 items-center">
			{scrollSnaps.map((_, index) => (
				<DotButton
					key={index}
					onClick={() => onDotButtonClick(index)}
					className={cn(
						"bg-transparent no-underline cursor-pointer border-[2px] border-gray-400 p-0 m-0 w-[14px] h-[14px] flex items-center justify-between rounded-[50%]",
						{
							"bg-primary": index === selectedIndex
						}
					)}
				/>
			))}
		</div>
	);
};
