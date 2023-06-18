import { roboto_slab } from "../font";

const FanFact = () => {
  return (
    <div className=" my-32 ">
      <div className="">
        <h2
          className={`${roboto_slab.className} font-extrabold md:text-center fun-fact_bg_title mt-[-290px] md:mt-[-120px]  text-[40px]  md:text-[150px]    `}
        >
          OUR FUN FACTS
        </h2>
      </div>
      <div className=" w-[350px] md:px-10 px-5   md:mx-auto  mt-[-50px] md:mt-[-330px]  ">
        <div className=" grid grid-cols-2 gap-y-14 md:grid-cols-2 md:gap-x-24  justify-between">
          <div>
            <h2
              className={`${roboto_slab.className} text-[40px] font-bold md:text-[50px] text-[#26302b]`}
            >
              4
            </h2>
            <p className=" text-gray-500">Platforms</p>
          </div>
          <div>
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
          <div>
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
