import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";

const CardAuthors = () => {
  return (
    <div className="dark:bg-[#1f2937] bg-white rounded-2xl flex flex-col w-60 my-4  relative cursor-pointer">
      <div className="absolute p-2">
        <button className="flex items-center justify-center gap-3 p-1 dark:bg-[#1f2937] bg-white w-20 rounded-xl">
          <span className="text-sm">34</span>
          <ArrowForward className="text-[#ca8a04] text-lg" />
        </button>
      </div>
      <div className="">
        <Image
          src="/imgs/avatar.jpg"
          alt="cardImg"
          width={150}
          height={50}
          className="w-full h-48 rounded-t-2xl"
        />
      </div>
      <div className="flex items-center justify-center -mt-7">
        <Image
          src="/imgs/avatar.jpg"
          alt="cardImg"
          width={150}
          height={50}
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div className=" flex justify-center  my-4">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-xl  font-semibold">kasse imad</h1>
          <p className=" text-base text-secondary-day">@Author Job</p>
        </div>
      </div>
    </div>
  );
};

export default CardAuthors;
