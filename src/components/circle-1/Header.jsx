import React from 'react';

function Header() {
  return (
    <header className="flex flex-col pt-4 w-full bg-stone-900 max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1281px] mx-auto px-5">
        <div className="flex gap-1.5 items-center my-auto min-h-[47px] w-[71px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/043fa247e734fd4229cd08a615032ced57add84f21e1fff99d10617b2a0789ba?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
            className="object-contain self-stretch my-auto aspect-[1.51] w-[71px]"
            alt="itel logo"
          />
        </div>
        <form className="flex items-center bg-white bg-opacity-10 min-h-[50px] flex-grow max-w-[712px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b47c92376e1669342acffbba3bda1ed59d7a7cd62fdea58c306d04749555a4b0?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
            className="object-contain w-6 aspect-square mr-2"
            alt=""
          />
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="search"
            placeholder="What are you looking for..."
            className="bg-transparent border-none text-white text-opacity-50 w-full py-2 focus:outline-none"
          />
        </form>
        <nav className="flex gap-10 items-center my-auto text-white min-w-[240px]">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/becc7bb02eded997ee728e8cd1774e6be999e569d0993589e14160f1e7fc8e6e?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
              className="object-contain w-6 aspect-square"
              alt=""
            />
            <div className="flex flex-col">
              <div className="text-xs tracking-wide">itel Customer Care</div>
              <div className="text-xs tracking-wide">1800-4190-525</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a5067986b181cae9c7a9d7afbbddf309d66a6d0b0702ecf5a040696df4549e?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
              className="object-contain w-6 aspect-square"
              alt=""
            />
            <div className="flex flex-col">
              <div className="text-xs tracking-wide">Nearby Stores</div>
              <div className="text-xs tracking-wide">Get Direction</div>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex h-0 bg-sky-800" />
    </header>
  );
}

export default Header;
