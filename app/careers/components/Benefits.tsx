"use client";
import { roboto_slab } from "../../font";
import basketballImg from "../../images/basketball.jpg";
import cafeImg from "../../images/cafe.jpg";
import gymImg from "../../images/gym.jpg";
import sportsImg from "../../images/sports.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper";

const Benefits = () => {
  return (
    <div className=" bg-[#26302b] py-20 mt-[2350px] md:mt-[1350px] mb-20">
      <div className="md:w-[1050px] md:px-20  mx-auto px-5 z-30 text-white ">
        {" "}
        <p className="text-[20px]  md:text-[13px] tracking-[8px]">
          OUR BENEFITS
        </p>
        <h2 className={` ${roboto_slab.className} text-[30px] mt-5 `}>
          {`At Ollyo, we offer a comprehensive benefits package to support our employees' well-being and work-life balance. Our perks include the following:`}
        </h2>
        <div className=" grid md:grid-cols-3 gap-x-7 mt-10">
          <div
            className={` ${roboto_slab.className} text-[16px] md:text-[12px] space-y-5 text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]`}
          >
            <p>Excellent Culture & Environment</p>
            <p>Meals, Coffee & Snacks</p>
            <p>Gym Facilities</p>
            <p>Relax & Sports zone</p>
            <p>Muslim Prayer Zone</p>
            <p>Free Shuttle Service</p>
          </div>
          <div
            className={` ${roboto_slab.className} text-[16px] md:text-[12px] mt-5 md:mt-0 space-y-5 text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]`}
          >
            <p>Dual Festival Bonuses</p>
            <p>Leave Encasement</p>
            <p>Loyalty Bonus</p>
            <p>Annual Pleasure Tour</p>
          </div>
          <div className=" mt-10 w-[390px] md:w-full md:mt-0">
            <Swiper
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={sportsImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={gymImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={cafeImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={basketballImg} alt="" />
              </SwiperSlide>
              <div className="  flex gap-x-4 mt-5     ">
                <div className=" button-prev-slide cursor-pointer  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="43.73"
                        x2="-3.92"
                        y1="43.5"
                        y2="32.85"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#23BFB8"></stop>
                        <stop offset="1" stop-color="#85EA80"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M24 4.5a19.5 19.5 0 1 0 0 39 19.5 19.5 0 0 0 0-39Zm0 36a16.5 16.5 0 1 1 0-33 16.5 16.5 0 0 1 0 33ZM33 24a1.5 1.5 0 0 1-1.5 1.5H20.12l3.44 3.44a1.5 1.5 0 0 1-2.12 2.12l-6-6a1.5 1.5 0 0 1 0-2.12l6-6a1.5 1.5 0 1 1 2.12 2.12l-3.44 3.44H31.5A1.5 1.5 0 0 1 33 24Z"
                    ></path>
                  </svg>
                </div>
                <div className=" button-next-slide  cursor-pointer  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="43.73"
                        x2="-3.92"
                        y1="43.5"
                        y2="32.85"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#23BFB8"></stop>
                        <stop offset="1" stop-color="#85EA80"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M24 43.5a19.5 19.5 0 1 0 0-39 19.5 19.5 0 0 0 0 39Zm0-36a16.5 16.5 0 1 1 0 33 16.5 16.5 0 0 1 0-33ZM15 24a1.5 1.5 0 0 1 1.5-1.5h11.38l-3.44-3.44a1.5 1.5 0 0 1 2.12-2.12l6 6a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12-2.12l3.44-3.44H16.5A1.5 1.5 0 0 1 15 24Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
