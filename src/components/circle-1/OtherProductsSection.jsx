import React from 'react';

function OtherProductsSection() {
  const products = [
    {
      title: "Smart Gadgets, Exquisite Design",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8286a8c326207d95b4aa2943cb7ac8b56939047ffd44a41b40482be52cfa9a1c?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    },
    {
      title: "Smart TV, Non-Stop Entertainment",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0df0d8611bc6c0fd0166845238ebe64fa3e1f678c89fb6373bdd973fcebb5d8?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    },
    {
      title: "Smart Phones: Sleek & Stylish",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0df0d8611bc6c0fd0166845238ebe64fa3e1f678c89fb6373bdd973fcebb5d8?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
      link: "#"
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-16 mt-32 w-full min-h-[461px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="w-full text-4xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full">
          Check out our other Products
        </h2>
        <div className="flex flex-wrap gap-5 items-start self-center mt-9 w-full rounded-[32px]">
          {products.map((product, index) => (
            <div key={index} className="flex overflow-hidden flex-col grow shrink rounded-2xl min-w-[240px] w-[569px] max-md:max-w-full">
              <div className="flex relative flex-col items-start px-8 pt-6 pb-36 w-full min-h-[258px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img loading="lazy" src={product.image} className="object-cover absolute inset-0 size-full" alt="" />
                <div className="flex relative flex-col mb-0 max-w-full w-[258px] max-md:mb-2.5">
                  <h3 className="text-xl font-bold tracking-wide leading-7 text-zinc-900">{product.title}</h3>
                  <a href={product.link} className="flex gap-0.5 items-center self-start mt-3 text-base font-medium tracking-tight leading-tight text-center text-gray-700">
                    <span className="self-stretch my-auto">Read more</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b6879a4461ead3ab616f218049d1e3229dbebe3ad9ef3ffb0a8385849d2812?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProductsSection;