import { roboto_slab } from "../../font";

const ValluesCard = ({
  subject,
}: {
  subject?: { icon?: JSX.Element; title?: string; description?: string };
}) => {
  return (
    <>
      <div className=" space-y-5 ">
        {subject?.icon}

        <h2
          className={` ${roboto_slab.className} text-[#26302b] text-[20px] sm:text-[23px] lg:text-[20px] `}
        >
          {subject?.title}
        </h2>
        <p className=" text-[16px] sm:text-[18px] lg:text-[16px] text-gray-500">
          {subject?.description}
        </p>
      </div>
    </>
  );
};

export default ValluesCard;
