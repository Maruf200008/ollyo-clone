import Image from "next/image";
import { roboto_slab } from "../../font";
import officeImg from "../../images/location.jpg";

const Magnificent = () => {
  return (
    <div className="bg-[#26302b] mb-20">
      <div className=" md:px-20  mx-auto  z-30   text-white">
        <div className=" flex md:flex-row flex-col gap-x-16">
          <Image
            src={officeImg}
            alt=""
            className=" md:h-[400px] h-[300px] w-full    md:w-[700px]"
          />
          <div className=" py-10 px-5">
            <div className="space-y-5">
              <p className=" md:text-[16px] text-[20px] font-medium  tracking-[5px]">
                THE MAGNIFICENT
              </p>
              <h2
                className={`${roboto_slab.className} md:text-4xl text-[40px]`}
              >
                Ollyo Headquarters
              </h2>

              <p className=" text-xl md:text-base">
                Holding 1, Patira, Dhaka - 1229 <br />{" "}
                <span className=" font-semibold">Bangladesh</span>
              </p>
            </div>
            <div className=" space-y-3 mt-14">
              <p className="text-[18px] md:text-[16px]  font-medium   tracking-[5px]">
                OFFICE TIME
              </p>
              <div className=" flex gap-x-10 text-[20px] md:text-[18px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]">
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
