"use client";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { roboto_slab } from "../font";
const GivingBack = () => {
  const programs = [
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
      <div className=" w-[350px]  md:px-10 overflow-hidden lg:px-20  md:mx-auto px-5 relative ">
        <p className="tracking-[5px] md:tracking-[10px] text-[10px]  md:text-lg">
          GIVING BACK
        </p>
        <h2
          className={`${roboto_slab.className} text-[25px] font-bold md:text-3xl text-[#26302b] `}
        >
          We care about the community and support through sponsorships &
          donations
        </h2>
        {/* Desktop design */}
        <div className=" mt-10 md:mt-24 space-y-5 hidden md:block">
          {!toggle
            ? programs.slice(0, 9).map((pro, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3  border-b pb-5 text-left "
                >
                  <div>
                    <p className=" font-semibold">{pro?.sponsor}</p>
                    <p className=" text-gray-500">{pro?.year}</p>
                  </div>

                  <h2 className={`${roboto_slab?.className} text-2xl  `}>
                    {pro?.title}
                  </h2>

                  <div>
                    <h2 className=" text-right ">{pro?.country}</h2>
                  </div>
                </div>
              ))
            : programs.map((pro, index) => (
                <div key={index} className="grid grid-cols-3  border-b pb-5 ">
                  <div>
                    <p className=" font-semibold">{pro?.sponsor}</p>
                    <p className=" text-gray-500">{pro?.year}</p>
                  </div>
                  <div className=" tex">
                    <h2 className={`${roboto_slab?.className} text-2xl `}>
                      {pro?.title}
                    </h2>
                  </div>
                  <div>
                    <h2 className=" text-right">{pro?.country}</h2>
                  </div>
                </div>
              ))}
          <div className=" absolute right-14">
            {toggle ? (
              <div className=" flex items-center gap-x-3">
                <AiOutlineMinusCircle size={30} />
                <p
                  className={`${roboto_slab.className} cursor-pointer underline `}
                  onClick={() => setToggle(!toggle)}
                >
                  Show Less
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <AiOutlinePlusCircle size={30} />
                <p
                  className={` ${roboto_slab.className} cursor-pointer underline `}
                  onClick={() => setToggle(!toggle)}
                >
                  Show More
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Mobile design */}
        <div className=" mt-24 space-y-5 md:hidden">
          {!toggle
            ? programs.slice(0, 9).map((pro, index) => (
                <div
                  key={index}
                  className="flex w-[350px] justify-between items-center border-b  pb-5 "
                >
                  <div className=" space-y-3">
                    <h2
                      className={`${roboto_slab.className}  text-xl md:text-2xl text-[#26302b] font-bold `}
                    >
                      {pro?.title}
                    </h2>
                    <div className=" flex items-center gap-x-5 text-[13px]">
                      <p className=" font-semibold text-[#26302b]">
                        {pro?.sponsor}
                      </p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className=" mr-[20px] text-[14px] text-gray-700">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))
            : programs.map((pro, index) => (
                <div
                  key={index}
                  className="flex w-[350px] justify-between items-center border-b pb-5 "
                >
                  <div className=" space-y-3">
                    <h2
                      className={`${roboto_slab?.className} text-xl md:text-2xl text-[#26302b] font-bold `}
                    >
                      {pro?.title}
                    </h2>
                    <div className=" flex items-center gap-x-5 text-[13px] text-[#26302b]">
                      <p className=" font-semibold">{pro?.sponsor}</p>
                      <p className=" text-gray-500">{pro?.year}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="mr-[20px] text-[14px] text-gray-700">
                      {pro?.country}
                    </h2>
                  </div>
                </div>
              ))}
          <div className="text-[#26302b] ">
            {toggle ? (
              <div
                className=" flex items-center gap-x-3 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineMinusCircle size={20} />
                <p className={`${roboto_slab.className}  underline `}>
                  Show Less
                </p>
              </div>
            ) : (
              <div
                className="flex items-center gap-x-3 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlinePlusCircle size={20} />
                <p className={` ${roboto_slab.className}  underline `}>
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
