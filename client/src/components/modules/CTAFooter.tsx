import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Button } from "../ui/Button";
const CTAFooter = () => {
	return (
		<div className="bg-cover bg-no-repeat bg-center h-full bg-[url('/bg_cta-footer.png')]">
			<MaxWidthWrapper className="lg:py-[120px] py-[40px] flex flex-col items-center gap-4">
				<h1 className="font-bold text-[52px] leading-[58px] capitalize">let&apos;s unlock your potential</h1>
				<p className="text-lg">
					<span>
						Our experts build the bridge of the industry and support your steps to enhance your skills.
					</span>
				</p>
				<Button>Join for Free</Button>
			</MaxWidthWrapper>
		</div>
	);
};

export default CTAFooter;
