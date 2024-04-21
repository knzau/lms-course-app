"use client";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { brandsLinks } from "@/utils/constants";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const Brands = () => {
	const controls = useAnimation();
	const ref = useRef<HTMLDivElement>(null);
	const tickerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });

	// useEffect(() => {
	// 	if (isInView) {
	// 		console.log({ isInView });

	// 		controls.start("animate");
	// 	}
	// }, [isInView, controls]);

	// useEffect(() => {
	// 	if (tickerRef.current) {
	// 		const tickerWidth = tickerRef.current.offsetWidth;
	// 		const totalWidth = brandsLinks.length * tickerWidth;
	// 		controls.set({ x: -totalWidth });
	// 	}
	// }, [controls, brandsLinks]);

	const tickerVariants: Variants = {
		initial: {
			x: 0
		},
		animate: {
			x: "100%",
			transition: {
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
				duration: 15
			}
		}
	};

	return (
		<div ref={ref} className="py-[60px] flex flex-col gap-8 text-center">
			<p className="font-medium">Brands that Trust Us</p>
			<motion.div
				ref={tickerRef}
				variants={tickerVariants}
				initial="initial"
				animate={controls}
				className="flex w-full items-center justify-between overflow-hidden whitespace-nowrap"
			>
				{brandsLinks.map((brand, index) => (
					<a key={index} href={brand.url} className="fill-[#98989A] ">
						{<Image alt="brands that trust us" src={brand.icon} width={90} height={30} />}
					</a>
				))}
			</motion.div>
		</div>
	);
};

export default Brands;
