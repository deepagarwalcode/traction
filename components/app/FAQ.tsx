import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/lib/data";

export interface IFaq {
  question: string;
  answer: string;
}

const FAQ = () => {
  return (
    <div className="w-[80vw] lg:w-[80vw] mx-auto py-[12vh] pt-[8vh] bg-secondary">
      <div>
        <h2 className="hidden md:block text-center mb-12 text-4xl lg:text-6xl font-extrabold">
          Frequently Asked{" "}
          <span className="relative">
            Questions
            {/* <div className="absolute h-2 lg:h-[10px] right-0 bg-primary w-full rounded-sm"></div> */}
          </span>
        </h2>
        <h2 className="md:hidden text-center mb-12 text-4xl lg:text-6xl font-extrabold">FAQs</h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full border-t-[1px] border-gray-600"
      >
        {FAQs.map((faq, index) => (
          <AccordionItem
            key={index}
            className="py-2 lg:py-4 border-gray-600"
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-xl lg:text-xl text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
