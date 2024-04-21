"use client";
import { Card, CardContent } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { testimonialsSection } from "@/utils/constants";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { CarouselDotButtons } from "../ui/Carousel/CarouselDots";

const Testimonials = () => {
	return (
		<MaxWidthWrapper className="flex flex-col gap-10 lg:my-[120px] my-[80px] items-center">
			<h2 className="text-center mb-4 font-bold text-4xl text-primary">{testimonialsSection.title}</h2>
			<Carousel.Root
				opts={{
					align: "center"
				}}
				shouldShowDots={true}
				className="flex flex-col justify-between  items-center"
				leftIcon={<CaretLeftIcon style={{ width: "24px", height: "24px" }} />}
				rightIcon={<CaretRightIcon style={{ width: "24px", height: "24px" }} />}
			>
				<Carousel.Content className="mb-16 flex justify-between  min-h-[290px]">
					{testimonialsSection.testimonials.map((testimony, index) => (
						<Carousel.Item key={index} className=" pl-12 md:basis-1/2 basis-1 flex justify-center">
							<Card className="p-4 border-radius rounded-[20px] drop-shadow border-secondary">
								<CardContent className="flex md:flex-row gap-4 justify-center items-center flex-col h-full">
									<div className="basis-[40%]">
										<h4 className="font-bold text-sm">{testimony.name}</h4>
										<p className="text-sm">{testimony.title}</p>
									</div>
									<div className="basis-[60%]">
										<p className="text-lg">{testimony.comment}</p>
									</div>
								</CardContent>
							</Card>
						</Carousel.Item>
					))}
				</Carousel.Content>
			</Carousel.Root>
		</MaxWidthWrapper>
	);
};

export default Testimonials;
