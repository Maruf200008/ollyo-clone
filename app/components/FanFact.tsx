import { roboto_slab } from "../font";

const FanFact = () => {
  return (
    <div className="h-[400px] my-32 ">
      <div className="">
        <h2
          className={`${roboto_slab.className} font-extrabold md:text-center fun-fact_bg_title mt-[-200px] md:mt-[-120px]  text-[40px]  md:text-[150px]    `}
        >
          OUR FUN FACTS
        </h2>
      </div>
      <div className=" md:w-full w-[90%] md:px-10 px-5   md:mx-auto  mt-[-50px] md:mt-[-330px]  ">
        <div className=" grid grid-cols-2 gap-y-14 md:grid-cols-2 md:gap-x-24  justify-between">
          <div>
            <h2
              className={`${roboto_slab.className} text-[40px] md:text-[50px]`}
            >
              4
            </h2>
            <p className=" text-gray-500">Platforms</p>
          </div>
          <div>
            <h2
              className={`${roboto_slab.className} text-[40px] md:text-[50px]`}
            >
              60+
            </h2>
            <p className=" text-gray-500">Powerful Web Applications</p>
          </div>
          <div>
            <h2
              className={`${roboto_slab.className} text-[40px] md:text-[50px]`}
            >
              130+
            </h2>
            <p className=" text-gray-500">Web Templates</p>
          </div>
          <div>
            <h2
              className={`${roboto_slab.className} text-[40px] md:text-[50px]`}
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
