import { authOption } from "@/lib/authOption";
import axios from "axios";
import { getServerSession } from "next-auth";
import Image from "next/image";
import DeleteAndEditPost from "./Delete&EditPost";

const Posts = async () => {
  const session = await getServerSession(authOption);
  console.log(session?.user.name);
  const data = await getData();
  console.log(data);
  if (!data.posts || data.posts.length === 0) {
    return (
      <div className=" dark:text-primary-night text-primary-day   py-12">
        <div className="sm:container mx-auto sm:p-14 lg:p-7 flex justify-center">
          <p>No posts available.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-auto">
      <div className="dark:text-primary-night text-primary-day rounded-xl">
        <table className="min-w-full divide-y divide-slate-800 rounded-xl border-2">
          <thead className="bg-neutral-50 dark:bg-slate-700 whitespace-nowrap rounded-t-xl">
            <tr>
              <th className="px-4 py-4 text-center text-xs font-semibold dark:text-gray-300 text-[#6b7280] uppercase tracking-wider">
                ARTICLES
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold dark:text-gray-300 text-[#6b7280] uppercase tracking-wider  ">
                LIKES
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold dark:text-gray-300 text-[#6b7280] uppercase tracking-wider ">
                COMMENTS
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold dark:text-gray-300 text-[#6b7280] uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y   divide-slate-800 dark:divide-slate-400 whitespace-wrap">
            {data.posts.map((post) =>
              session?.user?.image === post.userImg ? (
                <tr key={post._id}>
                  <td className="px-4 py-4 text-sm text-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.image}
                        alt="imgPost"
                        width={55}
                        height={50}
                        className="rounded-xl h-14"
                      />
                      <p className="max-w-36 text-md text-left xs:text-ellipsis xs:overflow-hidden">
                        {post.title}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-center max-w-16">
                    {post.likes}
                  </td>
                  <td className="px-4 py-4 text-sm text-center max-w-16">
                    {post.commentsCount}
                  </td>
                  <td className="py-8 text-sm font-semibold lg:divide-x-2 divide-slate-800 dark:divide-white text-center max-w-32">
                    <DeleteAndEditPost id={post._id} />
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      message: "Error fetching posts",
      posts: [],
    };
  }
}
export default Posts;
