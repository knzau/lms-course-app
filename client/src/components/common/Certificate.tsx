import Image from "next/image";
import { Card, CardContent } from "../ui/Card";
import { myLoader } from "@/utils/constants";

const Certificate = () => {
	return (
		<Card className="w-full border-[1px] border-accent rounded-md drop-shadow-md">
			<CardContent className="flex justify-between items-center gap-y-4 p-4 flex-wrap">
				<div className="flex flex-col gap-y-2 w-[55%]">
					<h3 className="text-2xl font-bold mb-2">Earn a Professional Certificate</h3>
					<p className="text-base">
						Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in
						your performance review
					</p>
				</div>
				<div className="w-[45%]">
					<Image
						loader={myLoader}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						src="/certificate_skeleton.svg"
						alt="earn certificate"
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default Certificate;
