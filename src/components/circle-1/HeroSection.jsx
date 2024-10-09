import React from 'react';

function HeroSection() {
  return (
    <section className="flex relative flex-col items-start px-9 pt-11 pb-56 w-full bg-[linear-gradient(92deg,#EBE8E2_1.62%,rgba(249,117,97,0.10_117.46%))] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start p-5 rotate-[-1.5707963267948966rad]">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex grow shrink bg-white h-[250px] rounded-[133.779px] w-[186px]" />
        ))}
      </div>
      <div className="flex z-10 flex-col mt-0 mb-0 ml-11 max-w-full w-[776px] max-md:mt-0 max-md:mb-2.5">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <h1 className="text-7xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl">
              Circle 1
            </h1>
            <p className="mt-3 text-xl tracking-normal leading-6 text-gray-500 max-md:max-w-full">
              Unique Design with Round Screen | Inbuilt BT Caller | Lanyard to Carry Around
            </p>
          </div>
        </div>
        <a href="#buy-now" className="flex items-center self-start mt-6 text-base font-bold tracking-normal leading-tight text-white uppercase min-h-[48px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e55cfbed7eeee62ba7f8869b9227787f259910e0f51ef2044267b24136b5e8?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.25] fill-neutral-900" alt="" />
          <div className="flex flex-col justify-center self-stretch w-[146px]">
            <div className="flex gap-2 items-center px-4 w-full bg-neutral-900 min-h-[48px]">
              <span className="self-stretch my-auto">Buy Now</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/055746908a598ce0b037af6807fe0e3be447a8407077762cd4eea9f8e9605c96?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14738c899bd47dc49fcbfcdee2b69eebd6b1165d6691b367b7075cff1be00acf?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.25] fill-neutral-900" alt="" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;