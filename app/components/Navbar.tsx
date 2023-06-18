import Image from "next/image";
import Link from "next/link";
import { roboto_slab } from "../font";
import ollyo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className=" w-full   md:h-[150px] md:mx-auto py-20 md:px-10 px-5  ">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image
            src={ollyo}
            alt="logo"
            className=" w-[90px] md:w-[110px] cursor-pointer"
          />
        </Link>
        <ul className=" w-full flex items-center justify-center mr-[-35px] md:mr-0 text-[14px] gap-x-5   md:gap-x-8 md:text-[18px]  text-slate-500">
          <Link
            href="/"
            className={`${roboto_slab.className} font-semibold underline text-[#008977]`}
          >
            Home
          </Link>
          <Link
            href="/careers"
            className={`${roboto_slab.className} hover:text-[#008977] transition`}
          >
            Careers
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
