import React from 'react';

function KingVoiceSection() {
  const features = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/baf74423b63776a15a2ef7d56b1d3f32b777f64e12222ad08a635ae7993061c6?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Incoming Call & Message" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecb13b1c55cc7635620a3c2ab6c2106a0875945cca48127f67c0404c48539ba3?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Dialing Number" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b1334ca5ad260a190e28b206b0f3d8363eef4f5f28fe7d6b3b58f188f53f05d?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Customization Support" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ece54938441e610e26d1807f346323b5f93ae6944dc3bd6ae46a8bd8c335f17?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Reading Menu & Phonebook" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1198d6f52a5164e11f51ed26bed2cad3471c48fd09346461b140b16b568a8c4b?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Instant Reading" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66dacc548611c6806372f8aac01b4d02547eec9d69514f406469a68df08c0aaa?apiKey=95b7b2aa9950440b926ba3614b9a318a&", text: "Time Update" }
  ];

  return (
    <section className="flex overflow-hidden flex-col px-6 pt-16 pb-28 w-full bg-stone-900 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col items-center px-3.5 pb-28 min-h-[308px] stroke-[1.5px] stroke-red-300 max-md:pb-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f60dc6b618582312d2323723a61c8c90f4deb15c236c6c9469ab2593ff645279?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-cover absolute inset-0 size-full" alt="" />
        <h2 className="relative z-10 mt-0 text-4xl font-medium tracking-tighter leading-tight text-center bg-clip-text bg-[linear-gradient(75deg,#FF998F_3.01%,#FFF7E8_96.47%)] max-md:max-w-full">
          A Phone That Speaks For You
        </h2>
        <div className="relative self-stretch font-bold tracking-tighter leading-tight uppercase bg-clip-text bg-[linear-gradient(75deg,#FF998F_3.01%,#FFF7E8_96.47%)] text-[239px] max-md:max-w-full max-md:text-4xl">
          King Voice
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce6186ffc5729f3d8e08101b4841df2bfbe3e27217c0b93791d3c6b55f00e61?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain z-10 mt-0 mb-0 ml-52 aspect-square w-[92px] max-md:mb-2.5" alt="" />
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-center mt-12 mb-0 w-full text-xl font-medium tracking-normal leading-7 max-w-[1200px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex gap-4 items-center w-full">
              <img loading="lazy" src={feature.icon} className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[54px]" alt="" />
              <div className="my-auto bg-clip-text bg-[linear-gradient(75deg,#FF998F_3.01%,#FFF7E8_96.47%)] w-[189px]">
                {feature.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KingVoiceSection;