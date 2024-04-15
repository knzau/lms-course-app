import Brands from "@/components/modules/Brands";
import Hero from "../components/modules/Hero";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<Brands />
		</div>
	);
}
