"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { useDotButton, CarouselDotButtons } from "./CarouselDots";
import { Carousel } from "./index";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
	shouldShowDots?: boolean;
	shouldShowButtons?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

const CarouselRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
	(
		{
			orientation = "horizontal",
			opts,
			setApi,
			plugins,
			className,
			shouldShowDots = false,
			shouldShowButtons = false,
			children,
			...props
		},
		ref
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y"
			},
			plugins
		);

		const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext]
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on("reInit", onSelect);
			api.on("select", onSelect);

			return () => {
				api?.off("select", onSelect);
			};
		}, [api, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext
				}}
			>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn("relative", className)}
					role="region"
					aria-roledescription="carousel"
					{...props}
				>
					<>
						{children}
						{!!shouldShowButtons && (
							<div className="flex justify-center items-center ">
								<Carousel.ButtonPrev
									className="relative rounded-lg translate-y-0"
									icon={props.leftIcon}
									variant="default"
								/>

								{shouldShowDots && (
									<div className="flex justify-center">
										<CarouselDotButtons
											selectedIndex={selectedIndex}
											scrollSnaps={scrollSnaps}
											onDotButtonClick={onDotButtonClick}
										/>
									</div>
								)}
								<Carousel.ButtonNext
									className="relative rounded-lg translate-y-0"
									icon={props.rightIcon}
									variant="default"
								/>
							</div>
						)}
					</>
				</div>
			</CarouselContext.Provider>
		);
	}
);
CarouselRoot.displayName = "Carousel";

export { type CarouselApi, CarouselRoot };
