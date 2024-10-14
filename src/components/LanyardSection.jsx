import React from 'react';

function LanyardSection() {
  return (
    <section className="flex flex-col self-center mt-24 max-w-full w-[1240px] max-md:mt-10">
      <div className="flex relative flex-col pt-28 w-full min-h-[761px] max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd250420cbc59045c39da5e1ef69c764cbd0be8e7d5614324ca9424babce38b?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a" className="object-cover absolute inset-0 size-full" alt="Background pattern" />
        <div className="flex relative flex-col w-full min-h-[651px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed72f8a066228e7b21072cf3ebf8aab93324eab090a318a5c3304b33c2f07f4?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a" className="object-cover absolute inset-0 size-full" alt="Lanyard background" />
          <div className="flex relative flex-col justify-center items-end px-20 py-24 w-full min-h-[651px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/074c3f70d5244e20b033be8e99c7df92d0888b9e50081a3bf59852c2727195a3?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a" className="object-cover absolute inset-0 size-full" alt="Lanyard showcase" />
            <div className="flex relative flex-col justify-center mb-0 max-w-full min-h-[446px] w-[373px] max-md:mb-2.5">
              <div className="flex flex-col w-full font-medium">
                <h3 className="text-sm tracking-wider leading-tight uppercase text-slate-900">Move in Style</h3>
                <h2 className="mt-4 text-5xl tracking-tighter leading-[58px] text-neutral-900 max-md:text-4xl max-md:leading-[54px]">
                  Lightweight and <br /> Handy to Carry
                </h2>
                <p className="mt-4 text-base leading-6 text-neutral-800">
                  Keep your device accessible and secure with this stylish and practical accessory - Lanyard.
                </p>
              </div>
              <div className="flex flex-col mt-20 max-w-full text-xl font-bold tracking-wider leading-tight uppercase w-[292px] max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb71f28047a2a2f4dccebe47a97ccfa735bb3bdd1bc4f697140adca65cfef871?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a" className="object-contain shadow-2xl aspect-square rounded-[112px] w-[97px]" alt="Extra lanyard" />
                <div className="mt-6 bg-clip-text bg-[linear-gradient(135deg,#242424_15.57%,#FF073C_143.28%)]">
                  Get free extra lanyard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LanyardSection;