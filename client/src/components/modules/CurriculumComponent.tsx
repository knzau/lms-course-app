import { Curriculum } from "@/utils/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const CurriculumComponent = ({ curriculum }: { curriculum: Curriculum }) => {
	return (
		<div className="flex flex-col gap-y-4 my-10">
			<h2 className="text-2xl font-bold ">Curriculum</h2>
			<p className="text-base text-">{curriculum.description}</p>
			<Accordion type="single" collapsible className="w-full flex flex-col gap-y-2">
				{curriculum.chapters.map((chapter, index) => {
					return (
						<AccordionItem
							key={`${index}`}
							value={`curriculum-chapter-${index}`}
							className="border-[1px] border-[#FFBF66] rounded-[8px] bg-backgroundAccent p-3"
						>
							<AccordionTrigger
								icon={<ChevronDownIcon className="w-6 h-6 p-1 rounded-sm bg-accent text-textPrimary" />}
							>
								<div className="flex flex-col items-start">
									<h3 className="text-lg font-semibold">{chapter.name}</h3>
									<span className="flex gap-x-1 text-base">
										<p>{chapter.lessons} Lessons</p>
										<span>.</span>
										<p>{chapter.duration} total length</p>
									</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-y-4 border-t-2 border-border p-6">
								<h3 className="text-lg font-semibold">What you'll learn</h3>
								{chapter.topics.map((topic, index) => (
									<span key={index} className="flex items-center gap-x-2 gap-y-4">
										<CheckIcon className="text-secondary" /> {topic}
									</span>
								))}
							</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};

export default CurriculumComponent;
