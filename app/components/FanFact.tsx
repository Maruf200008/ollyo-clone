import { roboto_slab } from "../font";

const FanFact = () => {
  return (
    <div className="h-[400px] my-32 ">
      <div>
        <h2
          className={`${roboto_slab.className} text-center fun-fact_bg_title mt-[-90px]  text-[90px]  md:text-[200px] `}
        >
          OUR FUN FACTS
        </h2>
      </div>
      <div className="md:w-[1350px] md:px-20  mx-auto px-5 mt-[-210px]  ">
        <div className=" grid grid-cols-2 gap-y-14 md:grid-cols-4 gap-x-24  justify-between">
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
