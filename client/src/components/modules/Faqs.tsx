import { faqsSection } from "@/utils/constants";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import parse from "html-react-parser";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Faqs = () => {
	return (
		<MaxWidthWrapper className="flex flex-col gap-16 lg:py-[120px] py-[40px]">
			<h2 className="text-3xl font-bold">{faqsSection.title}</h2>
			<Accordion type="single" collapsible className="w-full flex flex-col gap-y-2">
				{faqsSection.faqs.map((faq, index) => {
					return (
						<AccordionItem
							key={index}
							value={`faq-item-${index}`}
							className="border-[1px] border-[#FFBF66] rounded-[8px] bg-backgroundAccent p-6"
						>
							<AccordionTrigger
								icon={
									<ChevronDownIcon
										className="h-6 w-6 shrink-0 transition-transform duration-200 p-4 text-white bg-primary rounded-lg"
										color="#fff"
									/>
								}
							>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
			<span>{parse(faqsSection.moreQuestions)}</span>
		</MaxWidthWrapper>
	);
};

export default Faqs;
