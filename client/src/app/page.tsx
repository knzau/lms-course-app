import Hero from "../components/modules/Hero";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Benefits from "@/components/modules/Benefits";
import Features from "@/components/modules/Features";
import Testimonials from "@/components/modules/Testimonials";
import Pricing from "@/components/modules/Pricing";
import Faqs from "@/components/modules/Faqs";
import CTAFooter from "@/components/modules/CTAFooter";
import BrandCarousel from "@/components/modules/Brands";
import CourseSection from "@/components/modules/CourseSection";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<MaxWidthWrapper>
				<BrandCarousel />
				<CourseSection />
			</MaxWidthWrapper>
			<Benefits />
			<Features />
			<Testimonials />
			<Pricing />
			<Faqs />
			<CTAFooter />
		</div>
	);
}
