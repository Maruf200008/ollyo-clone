import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
const SocialMedia = () => {
  return (
    <div className=" text-2xl space-y-10 text-gray-500 flex items-center flex-col">
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

      <div className=" border-l h-[100px] border-gray-500 "></div>
      <div className=" ">
        <h4 className=" -rotate-90 text-lg mt-10">Follow us</h4>
      </div>
    </div>
  );
};

export default SocialMedia;
