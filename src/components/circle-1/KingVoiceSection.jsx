import React from "react";
import phoneImg from "../../assets/circle-1-phone.png";
import frequencyLogo from "../../assets/frequency.png";
const voiceFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/baf74423b63776a15a2ef7d56b1d3f32b777f64e12222ad08a635ae7993061c6?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Incoming Call & Message",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecb13b1c55cc7635620a3c2ab6c2106a0875945cca48127f67c0404c48539ba3?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Dialing Number",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1634d1e5f2fc56af4cef7d43fd166a45110042421a10e4174237468e5aaf0ced?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Customization Support",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b5997f84556be8f64db33340f26074a1964513ff80e79c74c069aca2b78e485?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Reading Menu & Phonebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1198d6f52a5164e11f51ed26bed2cad3471c48fd09346461b140b16b568a8c4b?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Instant Reading",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66dacc548611c6806372f8aac01b4d02547eec9d69514f406469a68df08c0aaa?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a",
    title: "Time Update",
  },
];

function KingVoiceSection() {
  return (
    <section className="flex flex-col px-6 py-16 bg-stone-900">
      {/* Header Section */}
      <div className="text-center mb-16">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f60dc6b618582312d2323723a61c8c90f4deb15c236c6c9469ab2593ff645279?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a"
          alt=""
          className="object-cover  inset-0 size-full"
        />
        <div className="">
          <h2 className="text-4xl font-medium text-white mb-4">
            A Phone That Speaks For You
          </h2>
          <div className="text-[80px] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-200">
            King Voice
          </div>
          <img
            loading="lazy"
            src={frequencyLogo}
            alt=""
            className="object-contain z-10 mt-0 mb-0 ml-52 aspect-square w-[92px] max-md:mb-2.5"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-between items-center">
        {/* Features List - Left Side */}
        <div className="flex flex-col gap-6 text-white">
          {voiceFeatures.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={feature.icon}
                alt=""
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div className="text-lg">{feature.title}</div>
            </div>
          ))}
        </div>

        {/* Phone Images in Center */}
        <div className="flex items-center">
          <img
            src={phoneImg}
            alt="Circle One Phone"
            className="object-contain h-64"
          />
        </div>

        {/* Features List - Right Side */}
        <div className="flex flex-col gap-6 text-white">
          {voiceFeatures.slice(3, 6).map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={feature.icon}
                alt=""
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div className="text-lg">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KingVoiceSection;
