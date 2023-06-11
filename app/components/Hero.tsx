import { poppins, roboto_slab } from "../font";
const Hero = () => {
  return (
    <div className=" md:w-[1350px]  md:h-[150px] mx-auto py-10 md:px-20 px-5   ">
      <div className=" ">
        <h2
          className={`${roboto_slab.className} font-black  text-[145px] uppercase leading-[150px] text-gray-700 .hero_title hidden md:block`}
        >
          Creating <br /> the-
          <span
            className={`${poppins.className} hero_span font-black -tracking-[1px] text-[165px] `}
          >
            future <br />
          </span>
          of web
        </h2>
        <h2
          className={`${roboto_slab.className} font-black  text-[50px]   uppercase  text-gray-700 hero_title md:hidden`}
        >
          Creating the-
          <span className={`${poppins.className} hero_span font-black `}>
            future{" "}
          </span>
          of web
        </h2>
        <p className=" md:mt-14 mt-6 text-lg  md:text-3xl md:w-[750px] text-gray-500 md:leading-[50px]">
          Helping businesses go online and grow bigger with high-tech web
          applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;
