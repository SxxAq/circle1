import React, { useState } from 'react';

function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('calls & contacts');
  const [openQuestion, setOpenQuestion] = useState(1);

  const categories = [
    'calls & contacts',
    'camera & picture',
    'Charging',
    'internet & network'
  ];

  const faqs = [
    {
      question: "How to set music as a ringtone?",
      answer: ""
    },
    {
      question: "Cannot make a call after activating data.",
      answer: "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue. Make sure the SIM account has enough balance and the place has a good signal. Check whether the phone is on 4G only mode, if yes, change to other modes. Try to reset factory settings, but remember to take data back up first. Visit the nearest customer service Centre for further check."
    },
    {
      question: "Cannot add new contacts to phone book or view phone book.",
      answer: ""
    },
    {
      question: "Copy contacts to another phone.",
      answer: ""
    }
  ];

  return (
    <section className="flex flex-col items-center self-center mt-32 max-w-full text-stone-900 w-[1280px] max-md:mt-10">
      <h2 className="text-5xl font-medium tracking-tighter leading-tight text-center max-md:max-w-full max-md:text-4xl">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="flex flex-col items-center mt-10 max-w-full w-[844px]">
        <div className="flex flex-wrap gap-5 items-start text-base font-bold tracking-normal leading-tight uppercase max-md:max-w-full">
          {categories.map((category) => (
            <button
              key={category}
              className={`gap-2.5 self-stretch px-5 py-4 rounded-[50px] ${
                activeCategory === category
                  ? 'text-white border border-solid bg-stone-900 border-stone-900'
                  : 'border-2 border-solid border-stone-500'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-10 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col w-full max-md:max-w-full">
              <button
                className="flex flex-col justify-center px-1 py-6 w-full text-xl font-medium tracking-normal leading-tight border-t border-b border-zinc-300 max-md:max-w-full"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                  <div className="self-stretch my-auto w-[759px] max-md:max-w-full">{faq.question}</div>
                  <img
                    loading="lazy"
                    src={openQuestion === index ? "https://cdn.builder.io/api/v1/image/assets/TEMP/02efebd0617f281f427520fc1556d51d72e64716fad5ebcebdbd4a2214e4bd31?apiKey=95b7b2aa9950440b926ba3614b9a318a&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/dcd860c139b2191253ffc0972b40bbaba87c9e975fef17efb093815f986a5934?apiKey=95b7b2aa9950440b926ba3614b9a318a&"}
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    alt=""
                  />
                </div>
              </button>
              {openQuestion === index && faq.answer && (
                <div className="mt-4 text-base leading-7 max-md:max-w-full">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="flex gap-1 items-center mt-10 text-base font-medium tracking-tight leading-tight text-center text-neutral-900">
        <span className="self-stretch my-auto">Read More</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd1334e2e53e3f1409bfdb4d79b5d515cec4173cafd037ecdde06a0e913be48?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
      </button>
    </section>
  );
}

export default FAQSection;
