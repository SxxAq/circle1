import React from 'react';

function SpecificationsSection() {
  const specs = [
    { label: "Model", value: "Circle 1" },
    { label: "Colors", value: "Rose Gold & Black" },
    { label: "Display", value: '3.35 cm (1.32")' },
    { label: "Battery", value: "500 mAh" },
    { label: "Language Support", value: "9 (English, Hindi, Gujarati, Tamil, Telugu, Bengali, Kannada & Malayalam & Punjabi)" },
    { label: "Phonebook", value: "500" },
    { label: "SMS", value: "200" },
    { label: "Kingtalker", value: "Yes" },
    { label: "Torch", value: "Yes" },
    { label: "BT Caller", value: "Yes" },
    { label: "Lanyard Support", value: "Yes" }
  ];

  return (
    <section className="flex flex-col mt-32 max-w-full w-[1280px] max-md:mt-10">
      <h2 className="flex-1 shrink gap-9 self-stretch w-full text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl">
        Full Specifications
      </h2>
      <div className="flex flex-wrap gap-10 mt-8 w-full text-sm leading-6 bg-zinc-100 text-neutral-400">
        <div className="flex flex-col text-base leading-relaxed bg-zinc-50 w-[219px]">
          <div className="overflow-hidden gap-5 self-stretch px-9 py-5 w-full whitespace-nowrap border-rose-600 border-solid shadow-sm bg-zinc-100 border-l-[6px] border-l-rose-600 min-h-[64px] text-neutral-800 max-md:px-5">
            General
          </div>
          <div className="overflow-hidden gap-5 self-stretch px-9 py-5 w-full bg-zinc-50 min-h-[64px] max-md:px-5">
            Display Features
          </div>
          <div className="gap-5 self-stretch px-9 py-5 w-full whitespace-nowrap bg-zinc-50 min-h-[64px] max-md:px-5">
            Battery
          </div>
          <div className="gap-5 self-stretch px-9 py-5 w-full whitespace-nowrap bg-zinc-50 min-h-[64px] max-md:px-5">
            Camera
          </div>
          <div className="flex-1 shrink gap-5 self-stretch px-9 py-5 w-full bg-zinc-50 min-h-[64px] max-md:px-5">
            Memory & Storage
          </div>
          <div className="gap-5 self-stretch px-9 py-5 w-full whitespace-nowrap bg-zinc-50 min-h-[64px] max-md:px-5">
            Connectivity
          </div>
          <div className="gap-5 self-stretch px-9 py-5 w-full whitespace-nowrap bg-zinc-50 min-h-[64px] max-md:px-5">
            Additional
          </div>
        </div>
        <div className="flex flex-col font-medium tracking-tight min-w-[240px] w-[257px]">
          {specs.map((spec, index) => (
            <div key={index}>{spec.label}</div>
          ))}
        </div>
        <div className="flex flex-col tracking-normal min-w-[240px] w-[547px] max-md:max-w-full">
          {specs.map((spec, index) => (
            <div key={index} className="max-md:max-w-full">{spec.value}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecificationsSection;