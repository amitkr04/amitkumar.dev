import React, { useState } from "react";
import faqQuestion from "../utils/faqQuestion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div>
        <div className="text-center lg:mb-8 mb-4">
          <div className="inline-flex items-center justify-center lg:w-10 w-8 lg:h-10 h-8 bg-blue-100 rounded-full lg:mb-4 mb-2">
            <HelpCircle className="lg:w-6 w-5 lg:h-6 h-5 text-blue-600" />
          </div>
          <h2 className="lg:text-4xl text-lg font-bold text-gray-900 lg:mb-4 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="lg:text-xl text-base text-gray-100   mx-auto">
            Everything you need to know about our services and development
            process
          </p>
        </div>

        <div className="space-y-6">
          {faqQuestion.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-md  p-4 shadow-md bg-slate-600"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full text-left lg:text-lg text-base font-medium text-white cursor-pointer"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-white text-left lg:text-base text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
