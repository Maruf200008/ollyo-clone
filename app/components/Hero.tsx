import { poppins, roboto_slab } from "../font";
import SocialMedia from "./SocialMedia";
const Hero = () => {
  return (
    <div className=" w-full  mx-auto py-10 md:px-10  px-5 relative">
      <div className=" ">
        <h2
          className={`${roboto_slab.className} font-black  md:text-[105px] uppercase leading-[100px] text-[#26302b] hero_title hidden md:block`}
        >
          Creating <br /> the-
          <span
            className={`${poppins.className} hero_span font-black -tracking-[1px]  `}
          >
            future <br />
          </span>
          of web
        </h2>
        <h2
          className={`${roboto_slab.className} font-black  text-[40px]   uppercase  text-[#26302b] hero_title md:hidden`}
        >
          Creating the-
          <span className={`${poppins.className} hero_span font-black `}>
            future{" "}
          </span>
          of web
        </h2>
        <p className=" md:mt-14 mt-6 text-[16px] w-[90%] font-semibold md:w-full md:text-3xl text-gray-900  md:text-gray-500 md:leading-[50px]">
          Helping businesses go online and grow bigger with high-tech web
          applications.
        </p>
        <div className=" md:flex items-center justify-center hidden ">
          <div className="  w-[30px] h-[45px] rounded-full  border-2 border-slate-800 my-32 relative  ">
            <div className=" h-[10px]  border-2 absolute border-slate-800 left-3 rounded-full top-4 animate-bounce"></div>
          </div>
        </div>
      </div>
      <div className=" absolute -right-[150px] mt-[-720px] hidden lg:block">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
