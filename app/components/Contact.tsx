import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { roboto_slab } from "../font";

const Contact = () => {
  return (
    <div className=" my-20">
      <div className=" md:px-10 xl:px-20  sm:mx-auto px-5 sm:px-10 2xl:px-[160px]">
        <p
          className={`${roboto_slab.className} text-lg sm:text-3xl md:text-[40px] lg:text-[60px] text-[#26302b]`}
        >
          Want to talk to us?
        </p>
        <Link
          className={`${roboto_slab.className} text-[35px] sm:text-[55px] md:text-[70px] lg:text-[90px] font-bold text-[#26302b]`}
          href="mailto:hello@ollyo.com"
        >
          hello@ollyo.com
        </Link>

        <div className=" mt-16 md:mt-32 flex flex-col md:flex-row xl:gap-x-40 gap-y-14 justify-start gap-x-28  ">
          <div className=" space-y-4 md:space-y-7  ">
            <h2
              className={`${roboto_slab.className} text-2xl sm:text-3xl text-[#26302b] `}
            >
              We Are Here
            </h2>
            <p className=" sm:text-xl text-[16px] text-gray-700">
              Holding 1 , Patira, Dhaka - 1229, <br /> Bangladesh
            </p>
          </div>
          <div className="space-y-4 md:space-y-7  ">
            <h2
              className={`${roboto_slab.className} text-lg sm:text-3xl  text-[#26302b] `}
            >
              Follow us
            </h2>
            <div className="flex gap-x-5 text-gray-500 text-xl sm:text-lg">
              <Link
                href="https://facebook.com/ollyohq"
                target="_"
                className=" hover:text-[#4267B2] transition"
              >
                <GrFacebookOption />
              </Link>
              <Link
                href="https://linkedin.com/company/ollyo"
                target="_"
                className=" hover:text-[#0072b1] transition"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://twitter.com/OllyoHQ"
                target="_"
                className="hover:text-[#00acee] transition"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
