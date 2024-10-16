import React, { useState } from "react";

const SpecificationsSection = () => {
  const [activeSection, setActiveSection] = useState("General");

  const sections = {
    General: [
      { label: "Model", value: "Circle 1" },
      { label: "Colors", value: "Rose Gold & Black" },
      { label: "Display", value: '3.35 cm (1.32")' },
      { label: "Battery", value: "500 mAh" },
      {
        label: "Language Support",
        value:
          "9 (English, Hindi, Gujarati, Tamil, Telugu, Bengali, Kannada & Malayalam & Punjabi)",
      },
      { label: "Phonebook", value: "500" },
      { label: "SMS", value: "200" },
      { label: "Kingtalker", value: "Yes" },
      { label: "Torch", value: "Yes" },
      { label: "BT Caller", value: "Yes" },
      { label: "Lanyard Support", value: "Yes" },
    ],
    "Display Features": [
      { label: "Colors", value: "Rose Gold & Black" },
      { label: "Display", value: '3.35 cm (1.32")' },
      { label: "Resolution", value: "128*128" },
      { label: "Resolution Type", value: "QVGA" },
      { label: "Pixel Density", value: "137 ppi" },
    ],
    Battery: [
      { label: "Battery Capacity", value: "500 mAh" },
      { label: "Battery Type", value: "Lithium Ion" },
      { label: "Talktime", value: "7.75 Hours" },
      { label: "Standby Time", value: "212.7 Hours" },
    ],
    Camera: [
      { label: "Rear Camera", value: "0.08M" },
      { label: "Rear flash", value: "Yes" },
    ],
    "Memory & Storage": [
      { label: "ROM", value: "4MB" },
      { label: "RAM", value: "4MB" },
      { label: "Expandable", value: "Upto 32GB" },
      { label: "Phonebook", value: "500" },
      { label: "Message", value: "200" },
    ],
    Connectivity: [
      { label: "Network Type", value: "2G" },
      { label: "SIM Slot", value: "Slot 1 & Slot 2- Standard" },
      { label: "Dual active/Standby", value: "Dual Standby" },
      { label: "Bluetooth Support", value: "Yes" },
      { label: "GSM", value: "1800/900" },
      { label: "FM Radio", value: "Wireless FM" },
      { label: "Earphone Jack", value: "3.5mm" },
    ],
    Additional: [
      {
        label: "Languages",
        value:
          "9 (English, Hindi, Gujarati, Tamil, Telugu, Bengali, Kannada & Malayalam & Punjabi)",
      },
      { label: "Accessories", value: "Charger & Battery" },
      { label: "SMS", value: "200" },
      { label: "Kingtalker", value: "Yes" },
      { label: "Torch", value: "Yes" },
      { label: "BT Caller", value: "Yes" },
      { label: "Lanyard Support", value: "Yes" },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-medium mb-8 text-neutral-900">
        Full Specifications
      </h1>

      <div className="bg-gray-50 flex">
        {/* Left Navigation */}
        <div className="w-[219px] flex flex-col">
          {Object.keys(sections).map((section) => (
            <div
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-9 py-5 cursor-pointer transition-colors ${
                activeSection === section
                  ? "bg-gray-100 border-l-[6px] border-rose-500 text-neutral-800"
                  : "bg-gray-50 border-l-[6px] border-transparent text-neutral-400"
              }`}
            >
              {section}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-gray-100">
          {sections[activeSection].map((spec, index) => (
            <div key={index} className="grid grid-cols-2 border-gray-200 ">
              <div className="p-4 ml-4 text-sm font-medium text-neutral-500">
                {spec.label}
              </div>
              <div className="p-4  text-sm text-neutral-600">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificationsSection;
