import { roboto_slab } from "../font";

const FanFact = () => {
  return (
    <div className=" my-32 w-[350px] sm:w-[550px] md:w-[770px] lg:w-[1024px]   ">
      <div className="">
        <h2
          className={`${roboto_slab.className} font-extrabold sm:text-center fun-fact_bg_title mt-[-290px] sm:mt-[-150px] md:mt-[-120px] lg:mt-[20px]  text-[40px]  sm:text-[80px] md:text-[90px] lg:text-[120px]     `}
        >
          OUR FUN FACTS
        </h2>
      </div>
      <div className="    md:px-10 px-5   sm:mx-auto  mt-[-50px] md:mt-[-70px]  ">
        <div className="  grid grid-cols-2 gap-y-14 md:grid-cols-2 lg:grid-cols-4 md:gap-x-24   lg:gap-x-24">
          <div className=" ">
            <h2
              className={`${roboto_slab.className} text-[40px] font-bold md:text-[50px] text-[#26302b]`}
            >
              4
            </h2>
            <p className=" text-gray-500">Platforms</p>
          </div>
          <div className=" lg:mx-[-30px] ">
            <h2
              className={`${roboto_slab.className} text-[40px] font-bold md:text-[50px] text-[#26302b]`}
            >
              60+
            </h2>
            <p className=" text-gray-500">Powerful Web Applications</p>
          </div>
          <div>
            <h2
              className={`${roboto_slab.className} font-bold text-[40px] md:text-[50px] text-[#26302b]`}
            >
              130+
            </h2>
            <p className=" text-gray-500">Web Templates</p>
          </div>
          <div className=" md:mb-[100px]">
            <h2
              className={`${roboto_slab.className} font-bold text-[40px] md:text-[50px] text-[#26302b]`}
            >
              1M+
            </h2>
            <p className=" text-gray-500">Users Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanFact;
