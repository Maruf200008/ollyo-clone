import Image from "next/image";
import { roboto_slab } from "../../font";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
const WorkWith = () => {
  return (
    <div className=" my-20">
      <div className="md:w-[1350px] mx-auto md:px-28 px-5 space-y-10 ">
        <h2 className={`${roboto_slab.className} text-[60px] md:text-[50px]`}>
          Work with us at Ollyo!
        </h2>
        <p className=" text-xl md:text-lg text-gray-700 text-justify md:pr-20">
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
        <div className=" space-y-5 ">
          <div className=" flex gap-x-6 md:-ml-[115px] items-end">
            <Image src={hero1} alt="" className=" w-[700px]" />
            <Image
              src={hero2}
              alt=""
              className=" hidden md:block w-[300px] h-[300px] "
            />
          </div>
          <div className=" flex gap-x-6 items-start justify-end md:mr-[145px]   ">
            <Image
              src={hero3}
              alt=""
              className=" w-[160px] h-[170px]  md:w-[240px] md:h-[250px]"
            />
            <Image
              src={hero4}
              alt=""
              className=" w-[209px] h-[280px]  md:w-[330px] md:h-[400px]"
            />
            <Image
              src={hero5}
              alt=""
              className=" hidden md:block  w-[300px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
