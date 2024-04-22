import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/Card";
import { CheckIcon } from "@radix-ui/react-icons";
import { pricingPlanSection } from "@/utils/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
const Pricing = () => {
	return (
		<MaxWidthWrapper className="lg:py-[120px] py-[40px]">
			<div className="flex flex-col gap-5 justify-center items-center mb-16">
				<h2 className="text-4xl font-bold text-primary">{pricingPlanSection.title}</h2>
				<p className="text-lg">
					Cutting-Edge Courses to Gain In-Demand Skills and Accelerate Your Professional Growth.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row gap-10 justify-center">
				{pricingPlanSection.plans.map((plan) => {
					const isProfessional = plan.title === "Professional+";

					return (
						<Card
							key={plan.title}
							className={cn(
								"min-w-[305px] w-[40%] max-w-[450px] py-16 px-4 rounded-lg border border-gray-400 drop-shadow-md",
								{
									"bg-gradient-to-b from-[#FFC573] to-[#FF9900] text-white": isProfessional
								}
							)}
						>
							<CardContent className="h-full">
								<div>
									<CardTitle className="mb-3">{plan.title}</CardTitle>
									<CardDescription
										className={cn("text-foreground", { "text-white": isProfessional })}
									>
										{plan.description}
									</CardDescription>
									<div className="mt-10 mb-8">
										<h2 className="text-3xl font-bold">
											{plan.pricing} <sup className="font-semibold text-sm">USD</sup>
										</h2>
										<p>{plan.bills}</p>
									</div>
									<Button
										variant={isProfessional ? "outline" : "default"}
										className={cn("text-white", { "text-primary border-primary": isProfessional })}
									>
										{plan.ctaButton}
									</Button>
								</div>
								<hr className="border-t-[1px] border-gray-200 my-10" />
								<div>
									<h4 className="text-lg font-bold mb-4">{plan.featuresTitle}</h4>
									<div className="text-base flex-col space-y-4">
										{plan.features.map((feature, index) => (
											<div className="flex items-center" key={index}>
												<span>
													<CheckIcon
														className={cn("inline-block w-4 h-4 mr-2 text-primary", {
															"text-white": isProfessional
														})}
													/>
												</span>
												<p key={index}>{feature}</p>
											</div>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</MaxWidthWrapper>
	);
};

export default Pricing;
