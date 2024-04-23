import { faqsSection } from "@/utils/constants";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { CaretDownIcon, ChevronDownIcon } from "@radix-ui/react-icons";

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
							<AccordionTrigger>{faq.question}</AccordionTrigger>
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
