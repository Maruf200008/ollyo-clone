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
        <h2 className={`${roboto_slab.className} text-[40px] md:text-[50px]`}>
          Work with us at Ollyo!
        </h2>
        <p className=" text-lg text-gray-700 text-justify pr-20">
          Ollyo is a parent company of{" "}
          <span className=" text-[#008977] underline">JoomShaper</span>,{" "}
          <span className=" text-[#008977] underline">Themeum</span>,{" "}
          <span className=" text-[#008977] underline">Droip</span> and{" "}
          <span className=" text-[#008977] underline">IcoFont</span>, which
          provides high-quality website software for global users. With over 15
          million downloads, individuals, businesses, and institutions widely
          utilize our exceptional, customizable, and user-friendly products.
        </p>
        <div className=" space-y-5">
          <div className=" flex gap-x-6 -ml-[115px] items-end">
            <Image src={hero1} alt="" className=" w-[700px]" />
            <Image src={hero2} alt="" className=" w-[300px] h-[300px] " />
          </div>
          <div className=" flex gap-x-6 items-start justify-end mr-[145px]   ">
            <Image src={hero3} alt="" className=" w-[240px] h-[250px]" />
            <Image src={hero4} alt="" className=" w-[330px] h-[400px]" />
            <Image src={hero5} alt="" className=" w-[300px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
