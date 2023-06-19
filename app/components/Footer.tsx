import Link from "next/link";
import { roboto_slab } from "../font";

const Footer = () => {
  return (
    <div className=" mt-[150px] xl:mt-[250px]  ">
      <div className=" sm:px-10 xl:px-20 px-5 mb-10">
        <div className=" flex gap-x-3 sm:gap-x-10 text-[14px] sm:text-lg text-gray-500">
          <p className=" uppercase font-semibold sm:font-normal text-gray-800">
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
