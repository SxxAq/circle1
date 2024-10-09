import React from 'react';

function SupportSection() {
  const supportChannels = [
    {
      title: "100 Days Promise",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0242b51f119947d1f751ea38d25749fd4e0359e6e6abd8895472606500ad3d57?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    },
    {
      title: "Screen Replacement",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c48e39b635d05e0e33225b01c7f4b43219473e691748b88cb6ab158f0ec12ce7?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    },
    {
      title: "Service Centre",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b33c0b70c4b2dbca1bcf2e263a133fdd970d738ecb05ced874886e6b289783c0?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    }
  ];

  return (
    <section className="flex flex-col items-center mt-32 w-full font-medium text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl tracking-tighter leading-tight text-stone-900 max-md:max-w-full">Support Channels</h2>
        <div className="flex flex-wrap gap-10 justify-between items-start self-center mt-9 max-w-full w-[1064px]">
          {supportChannels.map((channel, index) => (
            <div key={index} className="flex flex-col min-w-[240px] w-[322px]">
              <img loading="lazy" src={channel.image} className="object-contain max-w-full aspect-[1.11] w-[322px]" alt={channel.title} />
              <div className="flex flex-col items-center mt-6 w-full max-w-[321px]">
                <h3 className="text-2xl tracking-tight leading-8 text-stone-900">{channel.title}</h3>
                <a href={channel.link} className="flex gap-0.5 items-center mt-2 text-base tracking-tight leading-tight text-neutral-900">
                  <span className="self-stretch my-auto">Read more</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/830b18c4a36083a3e04d0d0dd00e6059ec1575a8daad22d20c7465f4880b8f4c?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
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