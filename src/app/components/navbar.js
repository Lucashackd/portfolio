"use client";

import { Iceberg } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <nav className="glass-effect">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full w-full items-center">
          <h1 className={`${iceberg.className} text-gradient text-4xl`}>
            Lucashackd :)
          </h1>
        </div>
        <ul className="flex h-full w-full items-center justify-end gap-6 text-xl text-white text-shadow-[2px_2px_.5px_rgba(0,0,0,0.25)]">
          <li className={inter.className}>About</li>
          <li className={inter.className}>Skills</li>
          <li className={inter.className}>Projects</li>
          <li className={inter.className}>Contact</li>
          <li className={inter.className}>Curriculum</li>
        </ul>
      </div>
    </nav>
  );
}
