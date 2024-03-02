import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer w-full border-t border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container w-full m-auto p-12 flex justify-between items-center">
        <Image
          src="/images/result.png" 
          alt="Logo" 
          width={100} 
          height={100} 
        />
        <p className="text-right text-slate-700 flex-1">All rights reserved</p>
      </div>
    </footer>
  );
};
