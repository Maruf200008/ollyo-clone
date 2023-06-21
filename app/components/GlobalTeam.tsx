import Link from "next/link";
import { roboto_slab } from "../font";
const GlobalTeam = () => {
  return (
    <div className="my-32  bg-[#26302b] relative       overflow-hidden">
      <div className=" absolute bottom-28 sm:bottom-0 ">
        <h2
          className={`${roboto_slab.className} text-[180px] md:text-[230px] font-extrabold leading-[230px] uppercase  global-title -z-40 `}
        >
          We Hire <br />
          SuperStars
        </h2>
      </div>

      <div className="  sm:px-10 xl:px-20 2xl:px-[160px] sm:mx-auto px-5 ">
        <div className=" flex flex-col lg:flex-row justify-start gap-x-20 xl:gap-x-28 2xl:gap-x-32 py-28 2xl:py-40 ">
          <div className=" z-40  ">
            <h2
              className={`${roboto_slab.className} text-[40px]  font-bold sm:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[80px]    text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] xl:leading-[85px] 2xl:leading-[105px] `}
            >
              A global team of expert professionals
            </h2>
          </div>
          <div className="  sm:leading-[40px]   text-[16px] sm:text-lg md:text-[22px] text-white mt-5">
            <p className=" mb-10">
              We are a team of designers, developers, musicians, and real life
              magicians hailing from different parts of the world.
            </p>
            <Link
              href=""
              className={`${roboto_slab.className} underline text-lg sm:text-xl md:text-2xl`}
            >
              See our job openings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTeam;
