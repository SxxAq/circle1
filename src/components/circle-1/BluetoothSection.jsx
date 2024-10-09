import React from "react";

function BluetoothSection() {
  return (
    <section className="flex overflow-hidden flex-col mt-24 w-full text-center bg-stone-400 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col items-center px-20 pt-14 w-full min-h-[956px] pb-[672px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d58872071190d2c9d1551cc760cee52c998843d3f31f1995eda3021fa9015a?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col mb-0 max-w-full w-[964px] max-md:mb-2.5">
          <h2 className="text-7xl font-medium tracking-tighter text-white leading-[88px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            <span className="text-5xl tracking-tighter text-white leading-[53px]">
              Realtime
            </span>
            <br />
            <span className="text-white">Bluetooth Calling</span>
          </h2>
          <p className="self-center mt-3.5 text-xl tracking-normal leading-8 text-zinc-100 w-[578px] max-md:max-w-full">
            No need to constantly hold your smartphone – Circle 1 with built-in
            BT Caller lets you take calls effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BluetoothSection;
