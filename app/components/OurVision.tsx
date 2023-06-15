import { poppins, roboto_slab } from "../font";
const OurVision = () => {
  return (
    <div className=" h-[1100px] md:h-[900px] h mt-[-30px]  ">
      <div className=" ">
        <h2
          className={` ${poppins.className} uppercase text-center  text-[#e7f2ef] mt-[160px] relative  text-[70px] font-bold md:text-[230px]`}
        >
          Our Vision
        </h2>
      </div>
      <div className="md:w-[1350px] md:px-20  mx-auto px-5 z-30 mt-[-60px] md:mt-[-180px] ">
        <div className=" absolute">
          <p className=" text-gray-700 text-[11px] md:text-xl tracking-[8px]">
            WE ENVISION WITH A MISSION
          </p>
          <h2
            className={` ${roboto_slab.className} hidden md:block text-[45px] mt-5 text-[#26302b]`}
          >
            Here, we embrace the challenge to drive <br /> each other to
            excellence by enriching <br /> our own capabilities.
          </h2>
          <h2
            className={` ${roboto_slab.className} md:hidden  text-[30px] mt-5 text-[#26302b]`}
          >
            Here, we embrace the challenge to drive each other to excellence by
            enriching our own capabilities.
          </h2>
          <div className=" grid md:grid-cols-2 text-lg md:w-[1050px] gap-y-10 px-3  md:gap-x-14 my-16 text-[#484848]">
            <div>
              <p className=" leading-10">
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
              <p className=" leading-10">
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
