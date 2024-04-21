import { benefitsSection } from "@/utils/constants";
import Image from "next/image";
import { Card, CardContent } from "../ui/Card";
import parse from "html-react-parser";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

const Benefits = () => {
	return (
		<div className="bg-backgroundAccent lg:py-[120px] py-[40px]">
			<MaxWidthWrapper className="flex flex-col gap-10  ">
				<div>
					<h2 className="text-4xl font-bold text-primary">{benefitsSection.title}</h2>
					<p className="text-lg">{benefitsSection.description}</p>
				</div>
				<div className="grid grid-cols-3 gap-10 ">
					{benefitsSection.benefits.map((benefit) => {
						return (
							<Card
								key={benefit.title}
								className="border-radius border-[1px] rounded-[20px] md:flex-row drop-shadow"
							>
								<CardContent className="flex lg:flex-col gap-10 p-8 ">
									<Image src={benefit.icon} alt={benefit.title} width={206} height={203} />

									<div>
										<h3 className="font-semibold text-2xl mb-4">{benefit.title}</h3>
										<span>{parse(benefit.description)}</span>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Benefits;
