import { subscriptionComponent } from "@/utils/constants";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/Card";
import { Button } from "../ui/Button";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const SubscriptionComponent = ({ className = "" }: { className?: string }) => {
	const { title, description, buttonPro, buttonFree, proFeatures, freeFeatures } = subscriptionComponent;
	return (
		<Card className={cn("max-w-[440px] py-8 px-4 rounded-lg border border-gray-400 drop-shadow-md", className)}>
			<CardContent>
				<CardTitle className="mb-2">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<Button variant="default" className="my-4 w-full h-[60px] font-semibold text-base">
					{buttonPro}
				</Button>
				<div className="my-4">
					{proFeatures.map((feature, index) => {
						return (
							<p key={feature + index} className="my-2">
								{feature}
							</p>
						);
					})}
				</div>
				<hr className="border-t-[1px] border-gray-300 my-4" />
				<h4>Your course includes:</h4>
				{proFeatures.map((feature, index) => {
					return (
						<span key={feature + index} className="my-2 flex">
							<CheckIcon className="inline mr-2 text-green-500" />
							{feature}
						</span>
					);
				})}
				<div className="my-4 flex gap-2 items-center">
					<hr className="border-t-[1px] border-gray-300 flex-1" />
					<p className="text-center">or</p>
					<hr className="border-t-[1px] border-gray-300 flex-1" />
				</div>

				<Button variant="outline" className="my-4 w-full h-[60px] text-base font-semibold">
					{buttonFree}
				</Button>
				<p>{freeFeatures}</p>
			</CardContent>
		</Card>
	);
};

export default SubscriptionComponent;
