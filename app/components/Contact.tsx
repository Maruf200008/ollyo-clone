import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { roboto_slab } from "../font";

const Contact = () => {
  return (
    <div className=" my-20">
      <div className="md:w-[1350px] md:px-20  mx-auto px-5">
        <p className={`${roboto_slab.className} text-lg md:text-3xl`}>
          Want to talk to us?
        </p>
        <Link
          className={`${roboto_slab.className} text-[45px] md:text-[70px]`}
          href="mailto:hello@ollyo.com"
        >
          hello@ollyo.com
        </Link>

        <div className=" mt-16 md:mt-32 flex flex-col md:flex-row gap-y-14 justify-start gap-x-28">
          <div className=" space-y-4 md:space-y-7 w-[300px] md:w-[200px]">
            <h2 className={`${roboto_slab.className} text-2xl md:text-xl `}>
              We Are Here
            </h2>
            <p className=" md:text-[12px] text-[16px] text-gray-500">
              Holding 1 , Patira, Dhaka - 1229, Bangladesh
            </p>
          </div>
          <div className="space-y-4 md:space-y-7 w-[200px] ">
            <h2 className={`${roboto_slab.className} text-2xl md:text-xl `}>
              Follow us
            </h2>
            <div className="flex gap-x-5 text-gray-500 text-xl md:text-lg">
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