import Link from "next/link";
import { roboto_slab } from "../font";
const Wings = () => {
  return (
    <div className=" bg-[#26302b] w-[350px] sm:w-[550px] md:w-[770px] lg:w-[1024px]   ">
      <div className="   sm:mx-auto sm:mt-[80px] md:px-10 px-5 md:mx-auto  text-white py-32">
        <p className="tracking-[10px]  sm:text-lg md:text-xl text-[12px]">
          OUR WINGS
        </p>
        <h2
          className={`${roboto_slab.className} font-black text-[27px] sm:text-[45px] sm:leading-[50px] my-10 md:text-[55px] md:leading-[60px] md:mb-[100px] lg:text-[80px] lg:leading-[100px]  `}
        >
          We are never limited to one single platform
        </h2>
        {/* sm device */}
        <div className=" w-full space-y-5    justify-end flex-col mt-6 md:hidden ">
          <div className=" flex  flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] mt-3`}
            >
              01
            </p>
            <Link href="https://www.themeum.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] uppercase transition">
                Themeum
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] mt-3`}
            >
              02
            </p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                JoomShaper
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] mt-3`}
            >
              03
            </p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] uppercase transition">
                Droip
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] mt-3`}
            >
              04
            </p>
            <Link href="https://icofont.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]  uppercase transition ">
                IcoFont
              </h2>
            </Link>
          </div>
        </div>
        {/* md device */}
        <div className=" w-full space-y-5    justify-end flex-col mt-6 hidden md:block  ">
          <div className="  flex  flex-row-reverse justify-start gap-x-4 ">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] md:ml-[20px] mt-3 md:mt-[35px] lg:mt-[45px] `}
            >
              01
            </p>
            <Link href="https://www.themeum.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] md:text-[90px] lg:text-[120px] font-black  product_name uppercase transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85ea80] hover:to-[#23bfb8]">
                Themeum
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] md:ml-[20px] mt-3 md:mt-[35px] lg:mt-[45px]`}
            >
              02
            </p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] md:text-[90px] lg:text-[120px] font-black  product_name uppercase transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85ea80] hover:to-[#23bfb8]">
                JoomShaper
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] md:ml-[20px] mt-3 md:mt-[35px] lg:mt-[45px]`}
            >
              03
            </p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] md:text-[90px]  lg:text-[120px] font-black  product_name uppercase transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85ea80] hover:to-[#23bfb8]">
                Droip
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p
              className={`${roboto_slab.className} text-lg sm:text-[30px] mr-[-20px] sm:mt-6 sm:ml-[10px] md:ml-[20px] mt-3 md:mt-[35px] lg:mt-[45px]`}
            >
              04
            </p>
            <Link href="https://icofont.com" target="_">
              <h2 className=" text-[40px] sm:text-[65px] md:text-[90px] lg:text-[120px] font-black  product_name uppercase transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85ea80] hover:to-[#23bfb8]">
                IcoFont
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wings;
