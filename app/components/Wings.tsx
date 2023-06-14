import Link from "next/link";
import { roboto_slab } from "../font";
const Wings = () => {
  return (
    <div className=" bg-[#26302b] ">
      <div className="md:w-[1350px] md:px-20  mx-auto px-5 text-white py-32">
        <p className="tracking-[10px]  md:text-lg">OUR WINGS</p>
        <h2
          className={`${roboto_slab.className} font-black text-2xl md:text-5xl md:leading-[70px] my-10`}
        >
          We are never limited to one <br /> single platform
        </h2>
        {/* Desktop Design  */}
        <div className=" md:flex justify-end flex-col mt-16 hidden">
          <div className=" flex flex-row-reverse justify-start">
            <p className={`${roboto_slab.className} text-2xl  mt-3`}>01</p>
            <Link href="https://www.themeum.com" target="_">
              <h2 className=" text-[190px] font-black product_name hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                Themeum
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start">
            <p className={`${roboto_slab.className} text-2xl  mt-3`}>02</p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[190px] font-black product_name hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                JoomShaper
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start">
            <p className={`${roboto_slab.className} text-2xl  mt-3`}>03</p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[190px] font-black product_name hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                Droip
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start">
            <p className={`${roboto_slab.className} text-2xl  mt-3`}>04</p>
            <Link href="https://icofont.com" target="_">
              <h2 className=" text-[190px] font-black product_name hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                IcoFont
              </h2>
            </Link>
          </div>
        </div>
        {/* Mobile Design  */}
        <div className="  justify-end flex-col mt-6 md:hidden">
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p className={`${roboto_slab.className} text-lg  mt-3`}>01</p>
            <Link href="https://www.themeum.com" target="_">
              <h2 className=" text-[50px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] uppercase transition">
                Themeum
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p className={`${roboto_slab.className} text-lg  mt-3`}>02</p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[50px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] text-underline uppercase transition">
                JoomShaper
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p className={`${roboto_slab.className} text-lg  mt-3`}>03</p>
            <Link href="https://www.joomshaper.com" target="_">
              <h2 className=" text-[50px] font-black  text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8] uppercase transition">
                Droip
              </h2>
            </Link>
          </div>
          <div className=" flex flex-row-reverse justify-start gap-x-4">
            <p className={`${roboto_slab.className} text-lg  mt-3`}>04</p>
            <Link href="https://icofont.com" target="_">
              <h2 className=" text-[50px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#85ea80] to-[#23bfb8]  uppercase transition ">
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
