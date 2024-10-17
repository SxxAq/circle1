import React from "react";
import phone1 from "../../assets/it5262.png";
import phone2 from "../../assets/it5330.png";
import phone3 from "../../assets/circle1.png";
import phone4 from "../../assets/superguru.png";

const ProductCard = ({ id, price, originalPrice }) => {
  const getImage = (id) => {
    switch (id.toLowerCase()) {
      case "it5262":
        return phone1;
      case "it5330":
        return phone2;
      case "circle 1":
        return phone3;
      case "super guru":
        return phone4;
      default:
        return phone1;
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(141.08deg, rgba(241, 238, 233, 0.4) -1.14%, rgba(213, 208, 199, 0.4) 109.83%)",
      }}
      className="flex flex-col items-center p-8 rounded-xl w-[300px]"
    >
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-[#F5F5F5] -z-10" />
        <img
          src={getImage(id)}
          alt={id}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-xl font-medium text-stone-900">{id}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-stone-900">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {originalPrice}
            </span>
          )}
        </div>
        <button className="flex items-center gap-2 mt-2 font-medium text-stone-900">
          BUY NOW
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            className="transform translate-y-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SimilarProducts = () => {
  const products = [
    { id: "it5262", price: "₹1,269.00" },
    { id: "it5330", price: "₹1,269.00", originalPrice: "₹4,999.00" },
    { id: "Circle 1", price: "₹1,269.00", originalPrice: "₹4,999.00" },
    { id: "Super Guru", price: "₹1,269.00", originalPrice: "₹4,999.00" },
  ];

  return (
    <section className="flex flex-col items-center mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1280px]">
        <h2 className="text-4xl font-medium tracking-tighter leading-tight text-stone-900 max-md:max-w-full">
          Similar Products
        </h2>
        <div className="flex flex-wrap gap-5 items-start self-center mt-9 max-md:max-w-full">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
