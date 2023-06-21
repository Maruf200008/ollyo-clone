"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ollyo from "../app/images/logo.png";
import { roboto_slab } from "./font";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/careers",
      name: "Careers",
    },
  ];

  return (
    <div className=" md:h-[150px] sm:mx-auto py-20 sm:px-10 xl:px-20 px-5 2xl:px-[160px]      ">
      <div className=" flex items-center  justify-between   ">
        <Link href="/ " className=" pl-5">
          <Image
            src={ollyo}
            alt="logo"
            className=" w-[90px] sm:w-[110px] md:w-[110px] 2xl:w-[130px] cursor-pointer"
          />
        </Link>
        <ul className=" flex text-[14px] sm:text-[16px] gap-x-5   md:gap-x-8 md:text-[18px]  text-slate-500">
          {navLinks.map(({ href, name }) => {
            const isActive = pathname.startsWith(href);
            console.log(href);
            return (
              <Link
                key={name}
                href={href}
                className={`${roboto_slab.className} ${
                  isActive ? "text-[#008977] underline" : " text-gray-500"
                }  hover:text-[#008977]`}
              >
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
