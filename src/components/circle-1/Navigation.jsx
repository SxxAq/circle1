import React from "react";

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
    <nav className="flex flex-col items-center px-16 py-4 w-full text-sm tracking-normal leading-relaxed text-center text-white bg-stone-900 max-w-full max-md:px-5">
      <ul className="flex flex-wrap gap-10 items-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1 whitespace-nowrap"
          >
            <div className="self-center">{item.name}</div>
            {item.hasDropdown && (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b85dd39c9ead775c8de980b9a504acb0b8da068caaeb4b5807a2512e5243c5?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                className="object-contain w-4 aspect-square"
                alt="Dropdown Icon"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
