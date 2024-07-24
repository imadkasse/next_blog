import { FavoriteBorderOutlined } from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";

const CommntLike = async ({ id }) => {
  const data = await getData(id);
  return data.comments.map((comment) => {
    return (
      <div className="flex dark:text-primary-night  text-primary-day justify-between gap-2 items-center my-7">
        <div className="">
          <Image
            src={comment.userImg}
            width={50}
            height={50}
            alt="imgProfile"
            className="rounded-full   "
          />
        </div>
        <div className="border dark:border-gray-400 border-gray-400 felx flex-col  p-2 rounded-md grow">
          <div className="flex divide-x-2 gap-2 items-center py-2">
            <h1 className="font-semibold text-lg  ">{comment.userName}</h1>
            <p className="text-base pl-2">{comment.createdAt}</p>
          </div>
          <p className="line-clamp-2 my-2">{comment.text}</p>
          <button className="dark:bg-neutral-800 w-16 bg-neutral-100/50 p-2 dark:text-primary-night rounded-xl text-sm items-center transition duration-200 dark:hover:text-pink-600 dark:hover:bg-pink-100 hover:text-pink-600 hover:bg-pink-100">
            <FavoriteBorderOutlined fontSize="medium" />
          </button>
        </div>
      </div>
    );
  });
};
async function getData(id) {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/comment/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  return res.data;
}

export default CommntLike;
