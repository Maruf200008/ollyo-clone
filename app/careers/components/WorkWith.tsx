import Image from "next/image";
import { roboto_slab } from "../../font";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
const WorkWith = () => {
  return (
    <div className=" my-20 ">
      <div className=" mx-auto sm:mx-auto  sm:px-10  xl:px-20 px-5 2xl:px-[160px] space-y-10 ">
        <h2
          className={`${roboto_slab.className} text-[60px] sm:text-[70px] md:text-[63px] lg:text-[75px] text-[#26302b] font-bold`}
        >
          Work with us at Ollyo!
        </h2>
        <p className=" text-[20px]   text-gray-700 lg:text-[25px] lg:leading-[45px]   leading-[35px] ">
          Ollyo is a parent company of{" "}
          <span className=" text-[#008977] underline cursor-pointer">
            JoomShaper
          </span>
          ,{" "}
          <span className=" text-[#008977] underline cursor-pointer">
            Themeum
          </span>
          ,{" "}
          <span className=" text-[#008977] underline cursor-pointer">
            Droip
          </span>{" "}
          and{" "}
          <span className=" text-[#008977] underline cursor-pointer">
            IcoFont
          </span>
          , which provides high-quality website software for global users. With
          over 15 million downloads, individuals, businesses, and institutions
          widely utilize our exceptional, customizable, and user-friendly
          products.
        </p>
        <div className=" space-y-5   ">
          <div className=" text-start grid grid-cols-2 lg:grid-cols-3 md:mt-[80px] md:gap-x-5 lg:ml-[-40px] xl:ml-[-80px]">
            <Image src={hero1} alt="" className=" col-span-2" />
            <Image
              src={hero2}
              alt=""
              className=" hidden lg:block lg:col-span-1  "
            />
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-5 lg:mr-[-40px] xl:mr-[-80px]">
            <Image src={hero3} alt="" className="  " />
            <Image src={hero4} alt="" className=" " />
            <Image src={hero5} alt="" className=" hidden  lg:block  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
