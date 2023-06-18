import Link from "next/link";
import { roboto_slab } from "../font";

const Footer = () => {
  return (
    <div className=" mt-[150px]  w-[350px]">
      <div className=" md:px-10 px-5 mb-10">
        <div className=" flex gap-x-3 md:gap-x-10 text-[14px] md:text-lg text-gray-500">
          <p className=" uppercase font-semibold text-gray-800">
            © 2023 Mohammad Maruf.
          </p>
          <Link
            href="/privacy"
            className={`${roboto_slab.className} hover:text-[#008977] font-normal `}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
