import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className="   space-y-5 text-gray-500 flex items-center flex-col">
      <div className=" flex flex-col gap-y-5">
        <Link
          href="https://facebook.com/ollyohq"
          target="_"
          className=" hover:text-[#4267B2] transition"
        >
          <GrFacebookOption size={20} />
        </Link>
        <Link
          href="https://linkedin.com/company/ollyo"
          target="_"
          className=" hover:text-[#0072b1] transition"
        >
          <FaLinkedinIn size={20} />
        </Link>
        <Link
          href="https://twitter.com/OllyoHQ"
          target="_"
          className="hover:text-[#00acee] transition"
        >
          <FaTwitter size={20} />
        </Link>
      </div>
      <div className=" border-l h-[100px] border-gray-500 "></div>
      <div className=" ">
        <h4 className=" -rotate-90 text-xl mt-10 ">Follow us</h4>
      </div>
    </div>
  );
};

export default SocialMedia;
