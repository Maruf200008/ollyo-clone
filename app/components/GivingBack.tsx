"use client";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { roboto_slab } from "../font";
const GivingBack = () => {
  interface Program {
    sponsor: string;
    year: number;
    title: string;
    country: string;
  }

  const programs: Program[] = [
    {
      sponsor: "Tutor LMS",
      year: 2023,
      title: "WordCamp Asia",
      country: "Thailand",
    },
    {
      sponsor: "Tutor LMS",
      year: 2022,
      title: "WordCamp Europe",
      country: "Portugal",
    },
    {
      sponsor: "Themeum",
      year: 2019,
      title: "WordCamp US",
      country: "USA",
    },
    {
      sponsor: "Themeum",
      year: 2019,
      title: "WordCamp Dhaka",
      country: "Bangladesh",
    },
    {
      sponsor: "Themeum",
      year: 2019,
      title: "WordCamp Kolkata",
      country: "India",
    },
    {
      sponsor: "Themeum",
      year: 2018,
      title: "WordCamp Pokhara",
      country: "Nepal",
    },
    {
      sponsor: "Themeum",
      year: 2018,
      title: "WordCamp US",
      country: "USA",
    },
    {
      sponsor: "JoomShaper",
      year: 2018,
      title: "J and Beyond",
      country: "Poland",
    },
    {
      sponsor: "JoomShaper",
      year: 2017,
      title: "Joomla World Conference",
      country: "Italy",
    },
    {
      sponsor: "JoomShaper",
      year: 2017,
      title: "Joomla Day",
      country: "UK",
    },
    {
      sponsor: "JoomShaper",
      year: 2016,
      title: "Joomla World Conference",
      country: "Canada",
    },
    {
      sponsor: "JoomShaper",
      year: 2016,
      title: "Joomla Day",
      country: "Malaysia",
    },
    {
      sponsor: "JoomShaper",
      year: 2015,
      title: "Joomla World Conference",
      country: "India",
    },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" my-32">
      <div className=" 2xl:mt-[250px] sm:px-10 overflow-hidden lg:px-20 2xl:px-[160px]  sm:mx-auto px-5 relative ">
        <p className="tracking-[5px]  md:tracking-[10px] text-[10px]  sm:text-lg sm:mb-4">
          GIVING BACK
        </p>
        <h2
          className={`${roboto_slab.className} text-[25px] font-bold sm:text-3xl md:text-[40px] text-[#26302b] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:w-[70%] 2xl:w-[60%]  `}
        >
          We care about the community and support through sponsorships &
          donations
        </h2>
        {/* sm device */}
        <div className=" mt-24 space-y-5 md:hidden">
          {!toggle
            ? programs.slice(0, 9).map((pro, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-5 "
                >
                  <div className=" space-y-3">
                    <h2
                      className={`${roboto_slab.className}  text-xl sm:text-2xl text-[#26302b] font-bold `}
                    >
                      {pro?.title}
                    </h2>
                    <div className=" flex items-center gap-x-5 text-[13px] text-[#26302b]">
                      <p className=" font-semibold">{pro?.sponsor}</p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className=" md:mr-[20px] text-[14px] sm:text-[16px] text-gray-700">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))
            : programs.map((pro, index) => (
                <div
                  key={index}
                  className="flex w-[350px] sm:w-[550px] justify-between items-center border-b pb-5 "
                >
                  <div className=" space-y-3">
                    <h2
                      className={`${roboto_slab.className}  text-xl sm:text-2xl text-[#26302b] font-bold `}
                    >
                      {pro?.title}
                    </h2>
                    <div className=" flex items-center gap-x-5 text-[13px] text-[#26302b]">
                      <p className=" font-semibold">{pro?.sponsor}</p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className=" mr-[20px] text-[14px] sm:text-[16px] text-gray-700">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))}
          <div className="text-[#26302b]  ">
            {toggle ? (
              <div
                className=" flex items-center gap-x-3 cursor-pointer  "
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineMinusCircle size={20} />
                <p
                  className={`${roboto_slab.className}  underline sm:text-[18px] `}
                >
                  Show Less
                </p>
              </div>
            ) : (
              <div
                className="flex items-center gap-x-3 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlinePlusCircle size={20} />
                <p
                  className={` ${roboto_slab.className}  underline sm:text-[18px] `}
                >
                  Show More
                </p>
              </div>
            )}
          </div>
        </div>
        {/* md device */}
        <div className=" mt-24 space-y-5 hidden md:block">
          {!toggle
            ? programs.slice(0, 9).map((pro, index) => (
                <div
                  key={index}
                  className=" grid grid-cols-3    border-b pb-5 "
                >
                  <div className=" space-y-3">
                    <div className="  md:text-[16px] text-[#26302b] ">
                      <p className=" font-semibold">{pro?.sponsor}</p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>
                  <h2
                    className={`${roboto_slab.className}  md:mx-[-30px] md:text-[22px] text-[#26302b]  lg:text-[25px] xl:text-[30px] `}
                  >
                    {pro?.title}
                  </h2>

                  <div>
                    <h2 className=" md:text-right text-gray-700 md:text-[20px]">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))
            : programs.map((pro, index) => (
                <div
                  key={index}
                  className=" grid grid-cols-3    border-b pb-5 "
                >
                  <div className=" space-y-3">
                    <div className="  md:text-[16px] text-[#26302b] ">
                      <p className=" font-semibold">{pro?.sponsor}</p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>
                  <h2
                    className={`${roboto_slab.className}  md:mx-[-30px] md:text-[22px] text-[#26302b]  lg:text-[25px] xl:text-[30px] `}
                  >
                    {pro?.title}
                  </h2>

                  <div>
                    <h2 className=" md:text-right text-gray-700 md:text-[20px]">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))}
          <div className="text-[#26302b]  ">
            {toggle ? (
              <div
                className=" flex items-center gap-x-3 cursor-pointer  "
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineMinusCircle size={30} />
                <p
                  className={`${roboto_slab.className}  underline  md:text-[22px] `}
                >
                  Show Less
                </p>
              </div>
            ) : (
              <div
                className="flex items-center gap-x-3 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlinePlusCircle size={30} />
                <p
                  className={` ${roboto_slab.className}  underline md:text-[22px] `}
                >
                  Show More
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingBack;
