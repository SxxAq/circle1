import React from "react";
import deviceImg from "../../assets/circle-1-phone.png";
import circleLogo from "../../assets/circle-1-logo.svg";
import { ArrowRight } from "lucide-react";
function HeroSection() {
  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-[#EBE8E2] to-[#e7a59b]">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-8 transform rotate-180">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-[249.18px] h-[232.84px] rounded-[133.78px] bg-white opacity-20"
            />
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="flex-grow flex items-center px-9 pt-11 pb-24 max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-7xl font-medium tracking-tighter leading-tight text-neutral-900 mb-3">
            Circle 1
          </h1>
          <p className="text-xl tracking-normal leading-6 text-gray-500 mb-6">
            Unique Design with Round Screen | Inbuilt BT Caller | Lanyard to
            Carry Around
          </p>
          <div>
            <button
              href="#buy-now"
              className="flex items-center px-6 py-3 bg-black text-white font-bold uppercase rounded-full hover:bg-gray-800 transition-colors"
            >
              Buy Now
              <ArrowRight color="#fff" size={24} />
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 ml-auto">
          <img
            src={deviceImg}
            alt="Circle 1 Device"
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 px-9">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src={circleLogo} alt="Circle 1 logo" className="w-10 h-10" />
            <span className="text-2xl font-medium">Circle 1</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#overview" className="font-bold uppercase">
              Overview
            </a>
            <a
              href="#specifications"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Specifications
            </a>
          </div>
          <a
            href="#buy-now"
            className="flex gap-2 items-center self-stretch px-6 py-3 my-auto font-bold tracking-normal leading-tight text-center uppercase bg-white rounded-3xl text-neutral-900 max-md:px-5"
          >
            <span className="self-stretch my-auto">BUY NOW</span>
            <ArrowRight color="#FF0037" size={24} />
          </a>
        </div>
      </nav>
    </section>
  );
}

export default HeroSection;
