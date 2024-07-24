import {
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  SmsOutlined,
} from "@mui/icons-material";
import axios from "axios";
import Image from "next/image";

const ArticleItem = async () => {
  const data = await getData();
  const post = data.randomPost || {};

  // التحقق من وجود البيانات قبل عرض المكون
  if (!post || post.length === 0) {
    return <div>Error: No data available</div>; // أو يمكنك عرض رسالة خطأ مخصصة
  }

  // التحقق من وجود بيانات الصورة
  const imageUrl = post.image || "/imgs/tagImg.jpg";
  const userImgUrl = post.userImg || "/imgs/avatar.jpg";

  return (
    <div className="">
      <div className="w-full flex xs:flex-col xs:items-center lg:flex-row-reverse justify-start">
        <Image
          src={imageUrl}
          width={1550}
          height={100}
          alt="imgArticle"
          className="object-cover rounded-3xl lg:w-imgArticle xs:px-2 lg:px-0"
        />
        <div className="lg:cardImgArticle xs:cardImgArticleXS shadow-2xl dark:shadow-black/50 shadow-black/40">
          <button className="bg-pink-100 rounded-xl text-sm p-1 transition duration-200 hover:bg-pink-800 text-pink-800 hover:text-white">
            {post.tag}
          </button>
          <h1 className="text-xl mt-3 dark:text-white min-w-72">
            {post.title}
          </h1>
          <div className="flex gap-3 items-center mt-4">
            <Image
              src={userImgUrl}
              width={150}
              height={50}
              alt="imgUser"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col w-32">
              <h1 className="text-lg dark:text-white text-primary-day font-semibold">
                {post.userName}
              </h1>
              <p className="text-sm dark:text-secondary-night text-secondary-day">
                {post.createdAt}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button className="flex gap-1 dark:bg-neutral-800 bg-neutral-100/50 p-2 dark:text-primary-night rounded-xl text-sm items-center transition duration-200 dark:hover:text-pink-600 dark:hover:bg-pink-100 hover:text-pink-600 hover:bg-pink-100">
                <FavoriteBorderOutlined fontSize="small" />
                <p>0</p>
              </button>
              <button className="flex gap-1 dark:bg-neutral-800 bg-neutral-100/50 p-2 dark:text-primary-night rounded-xl text-sm items-center transition duration-200 dark:hover:text-sky-600 dark:hover:bg-sky-100 hover:text-sky-600 hover:bg-sky-100">
                <SmsOutlined fontSize="small" />
                <p>{post.commentsCount}</p>
              </button>
            </div>
            <BookmarkBorderOutlined
              fontSize="small"
              className="text-black dark:text-primary-night w-8 h-8 p-1 dark:bg-neutral-800 bg-neutral-100/50 rounded-full dark:hover:bg-neutral-600 hover:bg-neutral-100/70 transition duration-200 cursor-pointer"
            />
          </div>
        </div>
        {/* siwper */}
      </div>
    </div>
  );
};

async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/randomPost`, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { randomPost: {} };
  }
}

export default ArticleItem;
