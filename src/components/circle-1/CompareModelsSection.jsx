import React from 'react';

function CompareModelsSection() {
  const models = [
    {
      name: "Super Guru 4G",
      price: "₹1,269.00",
      specs: {
        camera: "50MP AI Dual Rear Camera",
        memory: "Up to 32+4(2+2)GB*",
        dimensions: "50MP AI Dual Rear Camera",
        processor: "Octa-core Processor",
        battery: "4000mAh"
      }
    },
    {
      name: "it5262",
      price: "₹1,269.00",
      specs: {
        camera: "50MP AI Dual Rear Camera",
        memory: "Up to 32+4(2+2)GB*",
        dimensions: "50MP AI Dual Rear Camera",
        processor: "Octa-core Processor",
        battery: "4000mAh"
      }
    },
    {
      name: "it5330",
      price: "₹1,269.00",
      specs: {
        camera: "50MP AI Dual Rear Camera",
        memory: "Up to 32+4(2+2)GB*",
        dimensions: "50MP AI Dual Rear Camera",
        processor: "Octa-core Processor",
        battery: "4000mAh"
      }
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-32 w-full max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full font-medium max-md:max-w-full">
          <h2 className="self-stretch my-auto text-4xl tracking-tighter leading-tight text-neutral-900">Compare Models</h2>
          <button className="flex gap-2 items-center self-stretch my-auto text-sm leading-relaxed text-stone-900">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f77ee13a4e0dda255da27761fd8a207bbf0ef9baac7e61487fbccedaffb24d3?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]" alt="" />
            <span className="self-stretch my-auto underline">Compare other models</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-9 w-full max-md:max-w-full">
          {models.map((model, index) => (
            <div key={index} className="flex overflow-hidden flex-col flex-1 shrink p-6 rounded-3xl basis-0 bg-stone-100 min-w-[240px] max-md:px-5">
              <div className="flex flex-col w-full leading-tight">
                <div className="flex w-full min-h-[360px]" />
                <div className="flex gap-10 justify-between items-center mt-4 w-full">
                  <div className="self-stretch my-auto text-2xl font-medium tracking-tight text-zinc-900">{model.name}</div>
                  <div className="self-stretch my-auto text-xl font-bold tracking-wide text-rose-600">{model.price}</div>
                </div>
              </div>
              <div className="flex flex-col mt-7 w-full text-sm leading-relaxed text-black">
                {Object.entries(model.specs).map(([key, value], i) => (
                  <div key={i} className="flex gap-10 justify-between items-center mt-5 w-full">
                    <div className="self-stretch my-auto font-medium tracking-tight">{key}</div>
                    <div className="self-stretch my-auto tracking-normal">{value}</div>
                  </div>
                ))}
              </div>
              <button className="flex gap-3 justify-center items-start mt-7 w-full text-base font-bold tracking-normal leading-tight text-center uppercase text-neutral-900">
                <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
                  <span className="self-stretch my-auto">BUY NOW</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b52c4905a1e2e1b39d41ecb8d4945e90446a667d30cda4bed691af3244c0bf?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompareModelsSection;