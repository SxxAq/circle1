import React from "react";
import bgImg from "../../assets/Clip_path_group.png";
import img1 from "../../assets/BluetoothCalling1.png";
import img2 from "../../assets/BluetoothCalling2.png";

function BluetoothSection() {
  return (
    <div className="relative w-full h-[370px] md:h-screen bg-gradient-to-b from-[#4a0b03] to-[#d04629]">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center text-white pt-4 md:py-12">
        <h2 className="text-3xl md:text-5xl font-medium">Realtime</h2>
        <h1 className="text-3xl md:text-6xl font-medium mt-1 md:mt-2">Bluetooth Calling</h1>
        <p className="text-xs md:text-lg font-light md:text-md mt-2 md:mt-4 max-w-lg px-4 md:px-0">
          No need to constantly hold your smartphone – Circle 1 with built-in BT
          Caller lets you take calls effortlessly.
        </p>
      </div>

      {/* Images Section */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-10 flex justify-center items-end">
        {/* Phone Image */}
        <img 
          src={img2} 
          alt="Device" 
          className="w-[12rem] md:w-[28rem] mr-[-2rem] md:mr-[-5rem]" 
        />
        {/* Device Image */}
        <img 
          src={img1} 
          alt="Phone" 
          className="w-[14rem] md:w-[33rem] mt-[-10px]" 
        />
      </div>
    </div>
  );
}

export default BluetoothSection;