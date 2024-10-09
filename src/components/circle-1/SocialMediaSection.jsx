import React from 'react';

function SocialMediaSection() {
  const socialMediaImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/31c1451d9ef479d656a3d32fa00c7ce98ca3318033711c9890da3aa1ed2d118a?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4b5d286bbae97b81c96d2bd0a42165835da0fd94d4f6fb801ecfe5e3e0539505?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7db464fc5603dc2fcca5ea5fd5109213165f01f9cd338b8710a9091539cfe44a?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d911077f4df6551322d20ec873d0d26089cfdd79ed56f184f1a0949ac915284e?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
  ];

  return (
    <section className="flex overflow-hidden flex-col px-16 pt-14 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 items-start min-h-[408px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-h-[408px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full">
            <h2 className="flex-1 shrink text-4xl font-medium tracking-tighter leading-tight basis-12 text-neutral-900 max-md:max-w-full">
              Follow us and stay updated
            </h2>
            <a href="#" className="flex gap-2 items-center px-6 py-3 text-base font-bold tracking-normal leading-tight text-center text-white uppercase rounded-3xl bg-zinc-900 min-w-[240px] max-md:px-5">
              <span className="self-stretch my-auto">Follow us on Instagram</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/313547cc60eb87880573f1284bd1a2896840e1d20aecacaca34a6375057d1df5?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
            </a>
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-8 w-full max-md:max-w-full">
            {socialMediaImages.map((image, index) => (
              <div key={index} className="flex flex-col grow shrink items-end px-16 pt-60 pb-8 min-w-[240px] w-[244px] max-md:pt-24 max-md:pl-5">
                <img loading="lazy" src={image} className="object-contain w-8 aspect-square" alt={`Social media post ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;