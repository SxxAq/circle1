import React from 'react';
import deviceImage from '../../assets/Group 1973340333.png'; // Update this path

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a199c12734ddfa9d9fd2687b4259f1b475fb31d6cf431813792e2520cecb2116", text: "Unique design with round screen" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2a017f6c5c5525887d8ef63ee672ab1984538ecbd8950f938a228ed87fc361c", text: "Bluetooth Connectivity" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e67277a0d157ecf4c4033ede3ba1b7a88729a075cd6b518ef2656b7d1cc6cbdc", text: "500mAh Battery" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11479a93208e221a19a1d3db7f9815895aad7ece15d936c8d01c8a8421464902", text: "Camera with Flash" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/91149f17df95605ece27ceb051175e32811d43125b8b27922d4194a830d865d5", text: "King Talker" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/029c42e29fe3e9ed7cd03237c75419b60667af6dbeb469e215677235394d25b1", text: "9 Local Languages" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41fe667e504d2e3bb9f2d5d1ba6508ca8a5a6317484e8d4550f94dbd02edac5b", text: "Extra free lanyard" }
];

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className=" rounded-lg p-2 flex items-center justify-center">
        <img src={icon} alt="" className="object-contain" />
      </div>
      <span className="text-sm font-medium text-neutral-800">{text}</span>
    </div>
  );
}

export default function PowerFeatures() {
  return (
    <div className="bg-stone-100 rounded-3xl p-16 flex items-center mx-auto my-10 max-w-5xl"> {/* Added margin and max-width */}
      <div className="w-1/2 pr-8">
        <img src={deviceImage} alt="Device" className="w-full mb-[-48px] z-10 max-w-sm" />
      </div>
      <div className="w-1/2">
        <h2 className="text-xs uppercase tracking-wider font-medium mb-2 text-stone-950">Tech Specs</h2>
        <h1 className="text-3xl font-bold mb-6 text-neutral-900">Power Packed Features</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
        <p className="text-sm text-right mt-4 text-gray-600">&amp; Much More</p>
      </div>
    </div>
  );
}
