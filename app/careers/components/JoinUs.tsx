import Link from "next/link";
import { roboto_slab } from "../../font";
const JoinUs = () => {
  interface Subject {
    title: string;
    catagory: string;
    location: string;
    buttonText: string;
    applyLink: string;
  }

  const subjects: Subject[] = [
    {
      title: "Product Designer",
      catagory: "Design",
      location: "Onsite",
      buttonText: "Apply",
      applyLink: "https://ollyo.factorialhr.com/job_posting/29737",
    },
    {
      title: "Technical Support Engineer - WordPress",
      catagory: "Support",
      location: "Onsite",
      buttonText: "Apply",
      applyLink: "https://ollyo.factorialhr.com/job_posting/31120",
    },
    {
      title: "Intern/Fresher Designers",
      catagory: "Design",
      location: "Onsite",
      buttonText: "Apply",
      applyLink: "https://ollyo.factorialhr.com/job_posting/31722",
    },
  ];
  return (
    <div className=" my-20 mt-24">
      <div className=" sm:px-10 xl:px-20 px-5 2xl:px-[160px] mx-autoz-30   ">
        <h2
          className={` ${roboto_slab.className} mx-auto font-semibold  text-center text-[#26302b] text-[40px]   `}
        >
          Come join us at Ollyo
        </h2>
        <div className=" space-y-7  overflow-hidden ">
          {subjects.map((sub, index) => (
            <Link key={index} href={sub?.applyLink} target="_">
              <div className=" bg-white mb-10  space-y-5 xl:space-y-0 flex lg:flex-row flex-col justify-between lg:items-center h-[200px] lg:h-[100px]  p-4 md:p-6   cursor-pointer rounded-md mt-10 hover:shadow-lg transition">
                <h2 className={`${roboto_slab.className}  text-xl md:text-lg`}>
                  {sub?.title}
                </h2>
                <div className=" lg:flex lg:items-center lg:justify-center gap-x-5 xl:text-[12px] space-y-5 lg:space-y-0 ">
                  <div
                    className={` ${roboto_slab.className} flex items-center gap-x-3 text-slate-700`}
                  >
                    <p>{sub?.catagory}</p>
                    <div className=" w-[7px] rounded-full h-[7px] bg-slate-400" />
                    <p>{sub?.location}</p>
                  </div>
                  <button className=" border px-10 py-3 rounded-md border-gray-900 lg:ml-32 font-medium transition hover:border-0   hover:border-b-2 hover:border-black  hover:bg-gradient-to-r from-[#85ea80] to-[#23bfb8]">
                    {sub?.buttonText}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
