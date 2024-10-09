import React from 'react';

function DesignSection() {
  return (
    <section className="overflow-hidden py-6 pr-6 pl-20 w-full bg-stone-900 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[514px]">
              <h2 className="text-5xl font-medium tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Design Innovation: Unique Round Screen Display
              </h2>
              <p className="mt-6 text-base leading-6 text-zinc-300 max-md:max-w-full">
                A feature-rich phone with a unique round screen display that stands out from the crowd. Available in two attractive colors, it is a perfect choice for those seeking innovation and elegance in their phone.
              </p>
            </div>
            <div className="mt-12 text-xl font-bold tracking-wider leading-tight uppercase bg-clip-text bg-[linear-gradient(75deg,#FF998F_3.01%,#FFF7E8_96.47%)] max-md:mt-10">
              Black | Rose Gold
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e19dc9566f0ea12c28ce451d6ffcea0d058b7de4854da211a9ae7073e0c740a?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain grow w-full rounded-none aspect-[1.1] max-md:mt-10 max-md:max-w-full" alt="Circle 1 phone in black and rose gold colors" />
        </div>
      </div>
    </section>
  );
}

export default DesignSection;