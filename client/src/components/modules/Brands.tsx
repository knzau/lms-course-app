"use client";
import React from "react";
import { Carousel } from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { brandsLinks } from "@/utils/constants";

const Brands = () => {
	return (
		<div className="lg:py-[100px] py-[40px] flex flex-col gap-6">
			<h4 className="text-lg font-bold text-center text-foreground">Brands that trust us</h4>
			<Carousel.Root
				className="w-full overflow-hidden"
				opts={{
					loop: true,
					dragFree: true,
					containScroll: "trimSnaps",
					align: "center"
				}}
				plugins={[
					Autoplay({
						delay: 2000
					})
				]}
			>
				<Carousel.Content className="w-full flex gap-3 ">
					{brandsLinks.map((brand, index) => (
						<Carousel.Item key={"brand" + index} className="flex justify-center px-4  lg:basis-1/6">
							{<Image alt="brands that trust us" src={brand.icon} width={90} height={30} />}
						</Carousel.Item>
					))}
				</Carousel.Content>
			</Carousel.Root>
		</div>
	);
};

export default Brands;
