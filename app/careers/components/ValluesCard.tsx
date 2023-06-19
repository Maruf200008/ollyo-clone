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

        <h2 className={` ${roboto_slab.className} text-[#26302b] text-[20px] `}>
          {subject?.title}
        </h2>
        <p className=" text-[16px] md:text-[12px] text-gray-500">
          {subject?.description}
        </p>
      </div>
    </>
  );
};

export default ValluesCard;
