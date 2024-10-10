import React, { useState } from 'react';

function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('CALLS & CONTACTS');

  const categories = [
    'CALLS & CONTACTS',
    'CAMERA & PICTURE',
    'CHARGING',
    'INTERNET & NETWORK'
  ];

  const faqsByCategory = {
    'CALLS & CONTACTS': [
      {
        question: "How to set music as a ringtone?",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Cannot make a call after activating data.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Cannot add new contacts to phone book or view phone book.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Copy contacts to another phone.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      }
    ],
    'CAMERA & PICTURE': [
      {
        question: "Camera is forced to close and cannot take photos.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Pictures taken by the camera are blurry.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "The camera is broken or not working/cannot take photos.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Camera takes a long time to take a picture.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      }
    ],
    'CHARGING': [
      {
        question: "Unable to power on and stuck on the logo icon.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Unable to power on.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Phone indicates only 8% battery remaining after fully charging.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "Phone takes a long time to charge or charges slowly.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      }
    ],
    'INTERNET & NETWORK': [
      {
        question: "To transfer files without a USB cable, you can use WeChat.",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "To connect devices via USB Tethering:",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "To connect your device as USB Mass Storage:",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      },
      {
        question: "To transfer files from your phone's SD card to your computer:",
        steps: [
          "IF or not all the contacts cannot be called. If yes, go to step 2. If not, maybe it's not a phone issue.",
          "Make sure the SIM account has enough balance and the place has a good signal.",
          "Check whether the phone is on 4G only mode, if yes, change to other modes.",
          "Try to reset factory settings, but remember to take data back up first.",
          "Visit the nearest customer service Centre for further check."
        ]
      }
    ]
  };

  return (
    <section className="flex flex-col items-center self-center mt-32 max-w-full text-stone-900 w-[1280px] max-md:mt-10">
      <h2 className="text-5xl font-medium tracking-tighter leading-tight text-center max-md:max-w-full max-md:text-4xl">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="flex flex-col items-center mt-10 max-w-full w-[844px]">
        <div className="flex flex-wrap gap-5 justify-center items-start text-base font-bold tracking-normal leading-tight uppercase max-md:max-w-full">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-4 rounded-[50px] transition-all ${
                activeCategory === category
                  ? 'text-white border border-solid bg-stone-900 border-stone-900'
                  : 'border border-solid border-stone-500'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-10 w-full">
          {faqsByCategory[activeCategory].map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex justify-between items-center cursor-pointer px-1 py-6 w-full text-xl font-medium tracking-normal leading-tight border-t border-zinc-300">
                {faq.question}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd860c139b2191253ffc0972b40bbaba87c9e975fef17efb093815f986a5934?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                  className="w-5 h-5 transition-transform group-open:rotate-180"
                  alt=""
                />
              </summary>
              <div className="px-1 pb-6">
                <ol className="list-decimal pl-4 space-y-2">
                  {faq.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-base leading-7">{step}</li>
                  ))}
                </ol>
              </div>
            </details>
          ))}
        </div>
      </div>
      <button className="flex gap-1 items-center mt-10 text-base font-medium tracking-tight leading-tight text-center text-neutral-900">
        <span>Read More</span>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd1334e2e53e3f1409bfdb4d79b5d515cec4173cafd037ecdde06a0e913be48?apiKey=95b7b2aa9950440b926ba3614b9a318a&" 
          className="w-5 h-5"
          alt=""
        />
      </button>
    </section>
  );
}

export default FAQSection;