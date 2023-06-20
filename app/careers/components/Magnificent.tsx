import Image from "next/image";
import { roboto_slab } from "../../font";
import officeImg from "../../images/location.jpg";

const Magnificent = () => {
  return (
    <div className="bg-[#26302b] mb-20">
      <div className=" mx-auto  z-30   text-white">
        <div className=" grid lg:grid-cols-2 gap-x-16 lg:gap-x-10">
          <Image src={officeImg} alt="" />
          <div className=" py-10 sm:px-10 xl:px-20 px-5 2xl:px-[160px]   ">
            <div className="space-y-5">
              <p className="  text-[20px] font-medium  tracking-[5px]">
                THE MAGNIFICENT
              </p>
              <h2
                className={`${roboto_slab.className} md:text-[60px] text-[40px] lg:text-[40px] `}
              >
                Ollyo Headquarters
              </h2>

              <p className=" text-[16px] md:text-[20px] lg:text-[16px] ">
                Holding 1, Patira, Dhaka - 1229 <br />{" "}
                <span className=" font-semibold">Bangladesh</span>
              </p>
            </div>
            <div className=" space-y-3 mt-14">
              <p className="text-[18px] md:text-[20px]  font-medium   tracking-[5px]">
                OFFICE TIME
              </p>
              <div className=" flex gap-x-10 text-[20px] md:text-[22px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] lg:text-[20px]">
                <p>Monday - Friday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magnificent;
