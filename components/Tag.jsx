import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";

const Tag = () => {
  return (
    <div className=" rounded-2xl flex flex-col w-60 my-4  relative cursor-pointer">
      <div className="absolute p-2 ">
        <button className="flex items-center justify-center gap-3 p-1 bg-[#6366f1] text-white rounded-lg">
          <span className="text-sm ">#1</span>
        </button>
      </div>
      <div className="">
        <Image
          src="/imgs/skyimg.jpg"
          alt="cardImg"
          width={150}
          height={50}
          className="tagImgHover "
        />
      </div>
      <div className="flex items-center justify-start gap-5 ">
        <Image
          src="/imgs/tagImg.jpg"
          alt="cardImg"
          width={150}
          height={50}
          className="w-14 h-14 rounded-full"
        />
        <div className=" flex justify-center  my-6">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-xl  font-semibold">Garden</h1>
            <p className=" text-base text-secondary-day">13 Articles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
