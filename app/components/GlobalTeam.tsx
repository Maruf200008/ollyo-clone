import Link from "next/link";
import { roboto_slab } from "../font";
const GlobalTeam = () => {
  return (
    <div className="my-32  bg-[#26302b] relative w-[350px] sm:w-[550px] md:w-[770px]   overflow-hidden">
      <div className=" absolute bottom-28 sm:bottom-0  ">
        <h2
          className={`${roboto_slab.className} text-[180px] md:text-[230px] font-extrabold leading-[230px] uppercase  global-title -z-40 `}
        >
          We Hire <br />
          SuperStars
        </h2>
      </div>

      <div className="  md:px-10 sm:mx-auto px-5">
        <div className=" flex flex-col justify-start gap-x-20 py-28">
          <div className=" z-40  ">
            <h2
              className={`${roboto_slab.className} text-[40px]  font-bold sm:text-[50px] md:text-[60px]  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]`}
            >
              A global team of expert professionals
            </h2>
          </div>
          <div className="  sm:leading-[40px]   text-[16px] sm:text-xl md:text-[22px] text-white mt-5">
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
