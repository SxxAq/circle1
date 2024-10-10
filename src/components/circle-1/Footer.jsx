import React from "react";

function Footer() {
  const footerLinks = {
    products: [
      "Smart phones",
      "Feature phones",
      "Smart TV",
      "Smart Gadgets",
      "Home Care",
      "Personal Care",
    ],
    support: [
      "Exchange offer",
      "Screen replacement",
      "Service Centre",
      "100 days promise",
      "FAQs",
      "E-waste management",
    ],
    media: ["News", "Blogs"],
  };

  const aboutLinks = ["About us", "Investor quick links"];

  return (
    <footer className="flex flex-col pt-16 mt-32 w-full bg-neutral-900 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start px-20 pb-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[328px]">
          <div className="flex flex-col max-w-full w-[328px]">
            <div className="flex flex-col max-w-full w-[255px]">
              <div className="flex gap-1 items-center min-h-[38px] w-[58px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3c47d534d8f6d9f71609c5d9384a566895892e2847b6a2ef50943defd8ae3a?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                  className="object-contain self-stretch my-auto aspect-[1.53] w-[58px]"
                  alt="itel logo"
                />
              </div>
              <div className="flex gap-10 items-center mt-5 w-full max-w-[255px]">
                <div className="flex gap-3 items-start self-stretch my-auto">
                  {[
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/c49fb99b5fc576bdf79ac5f5b02a94c903af0a61e25c55e328ac44aa1ba2495f?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/f42658c98d1ac365f669b4430016cbe03b15e1d120559f1e26579b34107cc4d5?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/9bb8584340afc8ed0b1249d8aa7d8923117bb5c1687bd488bf7a3dd845e27b58?apiKey=95b7b2aa9950440b926ba3614b9a318a&",
                  ].map((src, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      src={src}
                      className="object-contain shrink-0 aspect-square rounded-[37px] w-[38px]"
                      alt={`Social media ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-sm tracking-normal leading-relaxed text-white rounded-none">
              <div className="font-medium tracking-tight opacity-40">
                Subscribe
              </div>
              <form className="flex overflow-hidden flex-col self-stretch mt-3.5 w-full rounded-lg border border-solid bg-white bg-opacity-0 border-white border-opacity-20">
                <div className="flex gap-5 justify-between px-3.5 py-3 bg-white bg-opacity-20">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-transparent border-none text-white"
                  />
                  <button type="submit" aria-label="Subscribe">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e9889a59a601ebec98d2899d374b96bde2ccd93dfc9924136ee74cdd0bf89e?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                      className="object-contain shrink-0 self-start aspect-[0.96] w-[23px]"
                      alt=""
                    />
                  </button>
                </div>
              </form>
              <p className="mt-4 leading-6">
                Join our newsletter to stay up to date on features and releases
              </p>
            </div>
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col w-40 leading-relaxed">
            <h3 className="text-sm font-medium tracking-tight text-white opacity-40 capitalize">
              {category}
            </h3>
            <ul className="flex flex-col items-start mt-5 text-xs tracking-wide text-white">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="flex gap-0.5 items-center mt-3 first:mt-0"
                >
                  <a href="#" className="gap-2 self-stretch my-auto">
                    {link}
                  </a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8accd27688e41aa853a22677f8a1b630b1315b7e2ac13bb2c4b4b2b483b25f3c?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-8">
          <div className="flex flex-col leading-relaxed">
            <h3 className="text-sm font-medium tracking-tight text-white opacity-40">
              Contact
            </h3>
            <div className="flex flex-col items-start mt-5 text-xs tracking-wide text-white">
              <div className="flex flex-col items-start max-w-full w-[138px]">
                <div className="flex gap-2 items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c828251aad4b6ea5482e06d06f69e3c0138d1c3b4d497b3d861d1ee2fced4fe2?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                    alt=""
                  />
                  <a
                    href="tel:+91-120-6650888"
                    className="gap-2 self-stretch my-auto"
                  >
                    +91-120-6650888
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start mt-3 max-w-full w-[138px]">
                <div className="flex gap-2 items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc10ec98db9a7d4d9ee2c33ee53cfe1cf24d0995bfa68ab6544ae4a54286ba89?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                    alt=""
                  />
                  <a
                    href="mailto:info.in@transsion.com"
                    className="gap-2 self-stretch my-auto"
                  >
                    info.in@transsion.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col leading-relaxed">
            <h3 className="text-sm font-medium tracking-tight text-white opacity-40">
              About itel
            </h3>
            <ul className="flex flex-col items-start mt-5 text-xs tracking-wide text-white">
              {aboutLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex gap-0.5 items-center mt-3 first:mt-0"
                >
                  <a href="#" className="gap-2 self-stretch my-auto">
                    {link}
                  </a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8accd27688e41aa853a22677f8a1b630b1315b7e2ac13bb2c4b4b2b483b25f3c?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full text-xs tracking-wide leading-relaxed text-neutral-400 max-md:max-w-full">
        <div className="flex justify-center items-center px-20 py-4 w-full bg-stone-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-1 justify-center items-center my-auto gap-10">
            <div className="text-gray-200 text-opacity-50">
              © 2021 Itel. All rights reserved.
            </div>
            <a href="#" className="text-neutral-400 hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;