import Image from "next/image";
import Link from "next/link";
import { roboto_slab } from "../font";
import ollyo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className=" w-[350px]   md:h-[150px]  md:mx-auto py-20 md:px-10     ">
      <div className=" flex items-center  justify-between   ">
        <Link href="/ " className=" pl-5">
          <Image
            src={ollyo}
            alt="logo"
            className=" w-[90px] md:w-[110px] cursor-pointer"
          />
        </Link>
        <ul className=" flex text-[14px] gap-x-5   md:gap-x-8 md:text-[18px]  text-slate-500">
          <Link
            href="/"
            className={`${roboto_slab.className} font-semibold underline   text-[#008977]`}
          >
            Home
          </Link>
          <Link
            href="/careers"
            className={`${roboto_slab.className} hover:text-[#008977]`}
          >
            Careers
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
