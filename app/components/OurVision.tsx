import { poppins, roboto_slab } from "../font";
const OurVision = () => {
  return (
    <div className="    sm:mx-auto  h-[1100px] md:h-[900px] mt-[30px] sm:mt-[200px] md:mt-[-30px]  ">
      <div className=" overflow-hidden">
        <h2
          className={` ${poppins.className} uppercase sm:text-center  text-[#e7f2ef] md:mt-[60px] relative mx-[-30px]  text-[55px] sm:text-[110px] font-bold md:text-[120px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] -z-20`}
        >
          Our Vision
        </h2>
      </div>
      <div className="  px-5  sm:px-10 xl:px-20 2xl:px-[160px]  sm:mx-auto z-50 mt-[-40px] sm:mt-[-80px] md:mt-[-60px] lg:mt-[-120px] xl:mt-[-170px]   ">
        <div className=" ">
          <p className=" text-gray-700 text-[11px] sm:text-[22px] sm:tracking-[5px] md:text-xl tracking-[3px] md:tracking-[8px] 2xl:text-lg">
            WE ENVISION WITH A MISSION
          </p>

          <h2
            className={` ${roboto_slab.className}  text-[27px]  sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:w-[80%] 2xl:leading-[60px]  2xl:text-[50px] font-bold  mt-5 text-[#26302b]`}
          >
            Here, we embrace the challenge to drive each other to excellence by
            enriching our own capabilities.
          </h2>
          <div className="    grid md:grid-cols-2   sm:text-xl  gap-y-10   md:gap-x-5 lg:gap-x-8 xl:gap-x-16 my-16  text-[#484848]">
            <div>
              <p className=" leading-[30px] sm:leading-[40px] md:leading-[30px] lg:leading-[40px] md:text-[18px] lg:text-[22px]">
                We have a unique combination of{" "}
                <span className=" font-bold">
                  {" "}
                  talents motivated by ambitious goals and a can-do attitude.{" "}
                </span>{" "}
                Our drive to develop excellent products is built on teamwork,
                passion, and giving team members full control over their work to
                succeed on their own. We want to create an environment where
                ideas can flourish.
              </p>
            </div>
            <div>
              <p className=" leading-[30px] sm:leading-[40px] md:leading-[30px] lg:leading-[40px] md:text-[18px] lg:text-[22px]">
                We dream, design, develop, and dare to challenge the status quo
                and <span className=" font-bold">make a difference.</span> We
                strive to develop a rich culture by{" "}
                <span className=" font-bold"> expanding our horizons</span> and
                bringing you ideas outside of the box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
