import Link from "next/link";

const Footer = () => {
  return (
    <div className=" mt-[150px]">
      <div className=" md:px-20 px-5 mb-10">
        <div className=" flex gap-x-10 text-[14px] md:text-[12px] text-gray-500">
          <p className=" uppercase">© 2023 Mohammad Maruf.</p>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
