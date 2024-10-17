import React from "react";
import supportImg1 from "../../assets/supportImg1.png";
import supportImg2 from "../../assets/supportImg2.png";
import supportImg3 from "../../assets/supportImg3.png";

function SupportSection() {
  const supportChannels = [
    {
      title: "100 Days Promise",
      image: supportImg1,
      link: "#",
    },
    {
      title: "Screen Replacement",
      image: supportImg2,
      link: "#",
    },
    {
      title: "Service Centre",
      image: supportImg3,
      link: "#",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-32 w-full font-medium text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl tracking-tighter leading-tight text-stone-900 max-md:max-w-full">
          Support Channels
        </h2>
        <div className="flex flex-wrap gap-10 justify-between items-start self-center mt-9 max-w-full w-[1064px]">
          {supportChannels.map((channel, index) => (
            <div key={index} className="flex flex-col min-w-[240px] w-[322px]">
              <img
                loading="lazy"
                src={channel.image}
                className="object-contain max-w-full aspect-[1.11] w-[322px]"
                alt={channel.title}
              />
              <div className="flex flex-col items-center mt-6 w-full max-w-[321px]">
                <h3 className="text-2xl tracking-tight leading-8 text-stone-900">
                  {channel.title}
                </h3>
                <a
                  href={channel.link}
                  className="flex gap-0.5 items-center mt-2 text-base tracking-tight leading-tight text-neutral-900"
                >
                  <span className="self-stretch my-auto">Read more</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/830b18c4a36083a3e04d0d0dd00e6059ec1575a8daad22d20c7465f4880b8f4c?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt=""
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
