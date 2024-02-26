import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu">
            <ul>
                <li>
                    <Link href={'#about'}></Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};
