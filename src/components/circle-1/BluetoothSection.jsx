import React from "react";
import bgImg from "../../assets/Clip_path_group.png";
import img1 from "../../assets/BluetoothCalling1.png";
import img2 from "../../assets/BluetoothCalling2.png";
function BluetoothSection() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#4a0b03] to-[#d04629]">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center text-white py-12">
        <h2 className="text-3xl font-bold">Realtime</h2>
        <h1 className="text-5xl font-bold mt-2">Bluetooth Calling</h1>
        <p className="text-md mt-4 max-w-lg">
          No need to constantly hold your smartphone – Circle 1 with built-in BT
          Caller lets you take calls effortlessly.
        </p>
      </div>

      {/* Images Section */}
      <div className="relative z-10 flex justify-center items-end ">
        {/* Phone Image */}
        <img src={img1} alt="Phone" className="w-4 lg:w-56" />
        {/* Device Image */}
        <img src={img2} alt="Device" className="w-32 lg:w-44 ml-4" />
      </div>
    </div>
  );
}

export default BluetoothSection;
