"use client";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
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
    <div className=" bg-[#26302b] py-20 mt-[1350px] mb-20">
      <div className="md:w-[1050px] md:px-20  mx-auto px-5 z-30 text-white ">
        {" "}
        <p className="  text-[13px] tracking-[8px]">OUR BENEFITS</p>
        <h2
          className={` ${roboto_slab.className} hidden md:block text-[30px] mt-5 `}
        >
          {`At Ollyo, we offer a comprehensive benefits package to support our employees' well-being and work-life balance. Our perks include the following:`}
        </h2>
        <div className=" grid grid-cols-3 gap-x-7 mt-10">
          <div className=" text-[12px] space-y-5 text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]">
            <p>Excellent Culture & Environment</p>
            <p>Meals, Coffee & Snacks</p>
            <p>Gym Facilities</p>
            <p>Relax & Sports zone</p>
            <p>Muslim Prayer Zone</p>
            <p>Free Shuttle Service</p>
          </div>
          <div className=" text-[12px] space-y-5 text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]">
            <p>Dual Festival Bonuses</p>
            <p>Leave Encasement</p>
            <p>Loyalty Bonus</p>
            <p>Annual Pleasure Tour</p>
          </div>
          <div>
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
              <div className=" hidden md:flex gap-x-5 mt-5     ">
                <div className=" button-prev-slide cursor-pointer  ">
                  <BsArrowLeftCircle size={30} className="" />
                </div>
                <div className=" button-next-slide  cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] ">
                  <BsArrowRightCircle size={30} className="" />
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
