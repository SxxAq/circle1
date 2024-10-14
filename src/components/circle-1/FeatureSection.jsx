import React from "react";

function FeatureSection() {
  const features = [
    {
      title: "Embrace Style and Innovation with Unique Round Screen Design",
      description:
        "Experience the unique round screen design - a blend of sleek aesthetics and cutting-edge functionality.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24f2d59df11f7b1a267a08995a0db84305c315a512e9c843be4a1bdd0d6ef41d?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    },
    {
      title: "Inbuilt BT Caller - Connected Everywhere",
      description:
        "itel Circle 1 features an inbuilt BT caller, ensuring seamless connectivity on the go. Take calls from your other devices directly on the Circle 1.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1dc46c2572829d1b8222a1f55b5ea1a0f91d68e914071fc110ced4c55bfcb7?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    },
    {
      title: "Lanyard for convenient Carrying",
      description:
        "Easily carry your device with the included lanyard for hands-free convenience wherever you go.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/babe91242b58001b63c4f59f4e2957e173899d538b6a37be652c1cd14807e238?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-center px-20 py-32 w-full bg-stone-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-start self-center max-w-full min-h-[174px] w-[1280px]">
          <h2 className="flex-1 shrink text-5xl font-medium tracking-tighter text-rose-600 leading-[58px] min-h-[174px] min-w-[240px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Your Style Companion with a Unique Round Screen
          </h2>
          <p className="text-base leading-7 text-neutral-800 w-[675px] max-md:max-w-full">
            Step into Style and Connectivity with itel Circle 1: Featuring a
            unique round screen design and an included lanyard, this device lets
            you carry style effortlessly. Capture every moment with the camera
            and flash, and stay connected on the go with the inbuilt BT Caller.
            Available in two captivating colors, it complements your style while
            keeping you chic and connected.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start mt-24 w-full rounded-xl max-md:mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center min-w-[240px] w-[340px]"
            >
              <img
                loading="lazy"
                src={feature.icon}
                className="object-contain w-14 aspect-square"
                alt=""
              />
              <div className="flex flex-col justify-center mt-4 w-full">
                <h3 className="text-2xl font-medium tracking-tight leading-8 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 opacity-70 text-neutral-800">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="overflow-hidden py-0.5 w-full bg-stone-200 text-stone-500">
        <div className="flex justify-center items-center animate-marquee whitespace-nowrap text-xl font-medium tracking-normal leading-tight uppercase">
          <div className="flex gap-5 items-center mx-5">
            <span>retro Connect with modern twist</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cffe1d5be7b455e093158efe29416db754bec179a4c3bdf25e1d764de061657?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a"
              className="object-contain shrink-0 w-[39px]"
              alt=""
            />
            <span>Snap back to reality</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e196ee234a803dae53c85872a60c8f0a74bf57d8c744b8aed6927912916a425a?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a"
              className="object-contain shrink-0 w-[38px]"
              alt=""
            />
            <span>retro Connect with modern twist</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89ee56e9b2693464cd823faaf6899c681ae7ac521b8751a15bda89e82acf494?placeholderIfAbsent=true&apiKey=95b7b2aa9950440b926ba3614b9a318a"
              className="object-contain shrink-0 w-[38px]"
              alt=""
            />
            <span>Snap back to reality</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
