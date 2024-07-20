import {
  ArrowForward,
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  SmsOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Post = ({
  id,
  title,
  tag,
  body,
  imgUrlPost,
  imgUrlUser,
  name,
  date,
  likes,
  commentsCount,
}) => {
  return (
    <div className="dark:bg-[#1f2937] bg-white rounded-2xl flex flex-col max-w-72  relative ">
      <div className="absolute p-2 z-20">
        <button className="bg-pink-100 rounded-xl text-sm p-1  transition duration-200 hover:bg-pink-800 text-pink-800 hover:text-white ">
          {tag}
        </button>
      </div>
      <Link href={`/posts/showPost/${id}`}>
        <div className="">
          <Image
            src={imgUrlPost}
            alt="cardImg"
            width={150}
            height={50}
            className="w-full h-44 rounded-t-2xl hover:opacity-70"
          />
        </div>
      </Link>
      <div className="px-3 py-4 ">
        <div className="my-4  flex gap-2 w-70">
          <Image
            src={imgUrlUser}
            alt="cardImg"
            width={150}
            height={50}
            className="w-14 h-14 rounded-full"
          />

          <div className="flex  items-center justify-evenly divide-x-2 gap-1">
            <h1 className="text-lg  font-semibold">{name}</h1>
            <p className=" text-sm text-secondary-day pl-1">{date}</p>
          </div>
        </div>
        <div className=" w-full h-16  py-1 my-1 line-clamp-2">
          <p className="text-xl  h-full    ">
            <span>{body}</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button className="flex gap-1 dark:bg-neutral-800 bg-neutral-100/50 p-2 dark:text-primary-night rounded-xl text-sm items-center transition duration-200 dark:hover:text-pink-600 dark:hover:bg-pink-100 hover:text-pink-600 hover:bg-pink-100">
              <FavoriteBorderOutlined fontSize="small" />
              <p>{likes}</p>
            </button>
            <Link href={`/posts/showPost/${id}`}>
              <button className="flex gap-1 dark:bg-neutral-800 bg-neutral-100/50 p-2 dark:text-primary-night rounded-xl text-sm items-center transition duration-200 dark:hover:text-sky-600 dark:hover:bg-sky-100 hover:text-sky-600 hover:bg-sky-100">
                <SmsOutlined fontSize="small" />
                <p>{commentsCount}</p>
              </button>
            </Link>
          </div>
          <BookmarkBorderOutlined
            fontSize="small"
            className="text-black dark:text-primary-night  w-8 h-8 p-1 dark: dark:bg-neutral-800 bg-neutral-100/50 rounded-full dark:hover:bg-neutral-600 hover:bg-neutral-100/70 transition duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
