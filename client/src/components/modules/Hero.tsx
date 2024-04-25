import { cn } from "@/lib/utils";
import { heroSection } from "@/utils/constants";
import Image from "next/image";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Hero = () => {
	return (
		<section className={cn("bg-cover bg-no-repeat bg-center min-h-[100%] bg-[url('/hero-bg.png')] mt-[112px]")}>
			<MaxWidthWrapper className="w-full flex flex-col md:flex-row justify-between  items-center h-full">
				<div className="w-[40%] flex flex-col gap-8">
					<h1 className="font-bold text-[52px] leading-[58px]">{heroSection.title}</h1>
					<p className="text-lg max-w-prose">{heroSection.subtitle}</p>
					<Link href="/courses" className={cn(buttonVariants(), "h-[55px] w-[200px]")}>
						{heroSection.buttonText}
					</Link>
				</div>
				<div className="w-[40%]">
					<Image src={heroSection.image} alt="skillbridge hero person" width={417} height={430} />
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Hero;
