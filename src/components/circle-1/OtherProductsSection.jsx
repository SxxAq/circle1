import React from "react";
import image1 from "../../assets/smartwatch.png";
import image2 from "../../assets/smartTv.png";
import image3 from "../../assets/smartPhones.png";

const ProductCard = ({ title, image, isLarge }) => (
  <div 
    style={{
      background: "linear-gradient(141.08deg, rgba(241, 238, 233, 0.4) -1.14%, rgba(213, 208, 199, 0.4) 109.83%)"
    }} 
    className={`rounded-2xl p-8 h-full ${isLarge ? 'min-h-[280px]' : 'min-h-[220px]'}`}
  >
    <div className="flex flex-col h-full relative">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium text-neutral-900">{title}</h3>
        <a href="#" className="flex items-center gap-2 text-neutral-600">
          Read more
          <span className="text-red-500">→</span>
        </a>
      </div>
      <div className={`absolute bottom-0 right-0 p-4 ${isLarge ? 'h-48' : 'h-36'}`}>
        <img
          src={image}
          alt={title}
          className={`object-contain h-full ${isLarge ? 'scale-125' : ''}`}
        />
      </div>
    </div>
  </div>
);

const OtherProductsSection = () => {
  const products = [
    {
      title: "Smart Gadgets, Exquisite Design",
      image: image1,
      isLarge: true
    },
    {
      title: "Smart TV, Non-Stop Entertainment",
      image: image2,
      isLarge: false
    },
    {
      title: "Smart Phones: Sleek & Stylish",
      image: image3,
      isLarge: false
    }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16 mt-8">
      <h2 className="text-4xl font-medium text-neutral-900 mb-8">
        Check out our other Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-6">
        {products.map((product, index) => (
          <div key={index} className="h-full">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProductsSection;