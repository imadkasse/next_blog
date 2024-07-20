import Post from "@/components/posts/Post";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import axios from "axios";
import Link from "next/link";

const page = async () => {
  const data = await getData();

  return (
    <div className="bg-neutral-200  dark:text-primary-night  text-primary-day dark:bg-black/20  pt-32 py-12 ">
      <div className="sm:container mx-auto sm:p-14 lg:p-7">
        {/* flex  items-center gap-5 flex-wrap  xs:justify-center md:justify-start  */}
        <div className=" flex   gap-5 flex-wrap  xs:justify-center lg:justify-start  ">
          {data.posts.map((post) => {
            return (
              <Post
                id={post._id}
                key={post._id}
                title={post.title}
                tag={post.tag}
                body={post.body}
                imgUrlPost={post.image}
                imgUrlUser={post.userImg}
                name={post.userName}
                date={post.createdAt}
                likes={post.likes}
                commentsCount={post.comments.length}
              />
            );
          })}
        </div>
        {/* Pagenation */}
        {/* <div className="flex items-center justify-center mt-10">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <KeyboardArrowLeft />
                </a>
              </li>
              <li>
                <Link href="/" className=" notCurrentPage">
                  1
                </Link>
              </li>
              <li>
                <Link href="/" className=" currentPage">
                  2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  <span className="sr-only">Next</span>
                  <KeyboardArrowRight />
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  );
};
async function getData() {
  const res = await axios.get("http://localhost:3000/api/posts");
  return res.data;
}

export default page;
