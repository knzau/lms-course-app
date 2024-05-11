import { faqsSection } from "@/utils/constants";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Faqs = ({ isCoursePage = false }) => {
	return (
		<MaxWidthWrapper
			className={cn("flex flex-col gap-16 lg:py-[120px] py-[40px]", {
				"lg:p-[0px] p-0 flex flex-col gap-y-4 gap-x-0": isCoursePage
			})}
		>
			<h2 className={cn("text-3xl font-bold", { "text-2xl ": isCoursePage })}>{faqsSection.title}</h2>
			<Accordion type="single" collapsible className="w-full flex flex-col gap-y-2">
				{faqsSection.faqs.map((faq, index) => {
					return (
						<AccordionItem
							key={index}
							value={`faq-item-${index}`}
							className="border-[1px] border-[#FFBF66] rounded-[8px] bg-backgroundAccent p-3"
						>
							<AccordionTrigger
								icon={<ChevronDownIcon className="w-6 h-6 p-1 rounded-sm bg-accent text-textPrimary" />}
							>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
			<span>
				Still you have any questions? Contact our Team via{" "}
				<a className="text-blue-600" href="https://www.support@skillbridge.com">
					support@skillbridge.com
				</a>
			</span>
		</MaxWidthWrapper>
	);
};

export default Faqs;
