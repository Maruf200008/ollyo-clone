import { poppins, roboto_slab } from "../../font";
import SocialMedia from "./SocialMedia";
const Hero = () => {
  return (
    <div className="   sm:mx-auto py-10 sm:px-10 px-5 xl:px-20 2xl:px-[160px] 2xl:mt-[90px]   ">
      <div className="">
        <h2
          className={`${roboto_slab.className}  font-black  text-[48px] sm:text-[85px] md:text-[100px] lg:text-[140px] lg:leading-[150px] xl:text-[170px] 2xl:text-[190px]    uppercase  text-[#26302b] hero_title md:leading-[110px] 2xl:leading-[200px]`}
        >
          Creating the-
          <span className={`${poppins.className} hero_span font-black `}>
            future{" "}
          </span>
          of web
        </h2>
        <p className=" md:mt-14 mt-6 text-[15px] sm:text-[25px]  md:text-[28px] lg:text-[30px] lg:text-[#26302b]  sm:text-gray-500 md:leading-[50px] lg:w-[65%] 2xl:lg:w-[60%]">
          Helping businesses go online and grow bigger with high-tech web
          applications.
        </p>
        <div className=" md:flex items-center justify-center hidden ">
          <div className="  w-[30px] h-[45px] rounded-full  border-2 border-slate-800 my-32 relative  ">
            <div className=" h-[10px]  border-2 absolute border-slate-800 left-3 rounded-full top-4 animate-bounce"></div>
          </div>
        </div>
      </div>
      <div className=" absolute right-[10px] mt-[-820px] hidden 2xl:block">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
