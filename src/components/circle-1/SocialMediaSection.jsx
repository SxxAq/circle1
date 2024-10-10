import React from "react";
import img1 from "../../assets/image 513.png";
import img2 from "../../assets/image 514.png";
import img3 from "../../assets/image 515.png";
import img4 from "../../assets/image 516.png";
import instagramLogo from "../../assets/instagram.svg";

function SocialMediaSection() {
  const socialMediaImages = [img1, img2, img3, img4];

  return (
    <section className="flex overflow-hidden flex-col px-16 pt-14 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 items-start min-h-[408px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-h-[408px] min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-start w-full max-md:max-w-full">
            <h2 className="flex-1 shrink text-4xl font-medium tracking-tighter leading-tight basis-12 text-neutral-900 max-md:max-w-full">
              Follow us and stay updated
            </h2>
            <a
              href="#"
              className="flex gap-2 items-center px-6 py-3 text-base font-bold tracking-normal leading-tight text-center text-white uppercase rounded-3xl bg-zinc-900 min-w-[240px] max-md:px-5"
            >
              <span className="self-stretch my-auto">
                Follow us on Instagram
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/313547cc60eb87880573f1284bd1a2896840e1d20aecacaca34a6375057d1df5?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-8 w-full max-md:max-w-full">
            {socialMediaImages.map((image, index) => (
              <div
                key={index}
                className="relative flex flex-col grow shrink min-w-[240px] w-[244px] h-[408px] max-md:pl-5"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",  // Use 'contain' to ensure full image visibility
                  backgroundRepeat: "no-repeat",  // Prevent image repetition
                  backgroundPosition: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={instagramLogo}
                  className="absolute bottom-16 right-4 w-8 aspect-square"
                  alt="Instagram icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;
