import React from 'react';

function Navigation() {
  const navItems = [
    { name: "Smartphone", hasDropdown: true },
    { name: "Feature Phones", hasDropdown: false },
    { name: "Smart TV", hasDropdown: true },
    { name: "Smart Gadgets", hasDropdown: true },
    { name: "Home Care", hasDropdown: false },
    { name: "Personal Care", hasDropdown: false },
    { name: "About Us", hasDropdown: false },
    { name: "Support", hasDropdown: true },
  ];

  return (
    <nav className="flex overflow-hidden z-0 flex-col justify-center items-center px-16 py-4 w-full text-sm tracking-normal leading-relaxed text-center text-white bg-stone-900 max-w-[1440px] max-md:px-5 max-md:max-w-full">
      <ul className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        {navItems.map((item, index) => (
          <li key={index} className="flex gap-0.5 items-center self-stretch my-auto whitespace-nowrap">
            <div className="gap-2 self-stretch my-auto">{item.name}</div>
            {item.hasDropdown && (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b85dd39c9ead775c8de980b9a504acb0b8da068caaeb4b5807a2512e5243c5?apiKey=95b7b2aa9950440b926ba3614b9a318a&" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;