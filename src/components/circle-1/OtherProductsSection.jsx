import React from "react";
import image1 from "../../assets/smartwatch.png";
import image2 from "../../assets/smartTv.png";
import image3 from "../../assets/smartPhones.png";

const ProductCard = ({ title, image }) => (
  <div className="bg-gray-50 rounded-2xl p-8">
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium text-neutral-900">{title}</h3>
        <a href="#" className="flex items-center gap-2 text-neutral-600">
          Read more
          <span className="text-lg">→</span>
        </a>
      </div>
      <img
        src={image}
        alt={title}
        className="object-contain h-32 w-32 ml-4"
      />
    </div>
  </div>
);

const OtherProductsSection = () => {
  const products = [
    {
      title: "Smart Gadgets, Exquisite Design",
      image: image1,
    },
    {
      title: "Smart TV, Non-Stop Entertainment",
      image: image2,
    },
    {
      title: "Smart Phones: Sleek & Stylish",
      image: image3,
    }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-medium text-neutral-900 mb-9">
        Check out our other Products
      </h2>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-5">
        <div className="col-span-1">
          <ProductCard {...products[0]} />
        </div>
        <div className="col-span-1">
          <ProductCard {...products[1]} />
        </div>
        <div className="col-span-1">
          <ProductCard {...products[2]} />
        </div>
      </div>
    </section>
  );
};

export default OtherProductsSection;
