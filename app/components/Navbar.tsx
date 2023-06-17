import Image from "next/image";
import Link from "next/link";
import { roboto_slab } from "../font";
import ollyo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className=" md:w-[1350px]  md:h-[150px] mx-auto py-20 md:px-28 px-5  ">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={ollyo} alt="logo" className=" w-[100px] cursor-pointer" />
        </Link>
        <ul className=" flex items-center justify-center  gap-x-5 text-[12px] text-slate-500">
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
