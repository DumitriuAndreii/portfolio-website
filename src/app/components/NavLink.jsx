import React from 'react';

export const NavLink = ({ href, title }) => {
  
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      const section = document.querySelector(href); 
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop - 140,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};
