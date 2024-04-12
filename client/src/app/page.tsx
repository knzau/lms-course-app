import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
	return (
		<MaxWidthWrapper className="bg-accent mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
			<p>Hello World</p>
		</MaxWidthWrapper>
	);
}
