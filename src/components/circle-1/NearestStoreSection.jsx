import React from "react";
import storeBg from "../../assets/Group 1973339742.png"; // replace with the correct path to your background image

function NearestStoreSection() {
  return (
    <section className="flex justify-center items-center w-full py-4">
      <div className="bg-[#f8f6f3] w-full max-w-[1260px] px-6">
        <div
          className="relative w-full h-64 rounded-xl bg-contain max-w-[1260px] bg-center"
          style={{
            backgroundImage: `url(${storeBg})`,
          }}
        >
          <div className="absolute inset-0 bg-white/30 rounded-xl"></div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 max-md:px-6">
            <h2 className="text-3xl font-bold text-neutral-900">
              Find Your Nearest itel Store!
            </h2>
            <p className="mt-2 text-neutral-600">
              We are here to help you find the right phone.
            </p>
            <button className="mt-5 flex gap-2 items-center text-rose-600 font-semibold">
              <span>SEE MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="red"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7m0 0l-7 7m7-7H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NearestStoreSection;
