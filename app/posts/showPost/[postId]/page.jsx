import Image from "next/image";
import CommentLike from "@/components/posts/CommntLike";

import CommentForm from "@/components/posts/CommentForm";
import axios from "axios";

const page = async ({ params }) => {
  const data = await getData(params.postId);
  const post = data.post;
  return (
    <div className="pt-32 dark:text-primary-night  text-primary-day ">
      <div className="sm:container mx-auto">
        <div>
          <Image
            src={post.image}
            width={9950}
            height={150}
            className="w-full h-[80vh] rounded-lg"
          />
        </div>
        <div className="my-4 py-2 mx-32 border-b sm:mx-14  md:mx-32 xs:mx-3">
          <p className="text-xl ">{post.body}</p>
        </div>
        <div className="flex  items-center gap-5 mb-12 mx-32 sm:mx-14 md:mx-32 xs:mx-3">
          <div className="">
            <Image
              src={post.userImg}
              height={50}
              width={150}
              className=" rounded-full"
            />
          </div>
          <div className="flex flex-col w-full ">
            <p className="text-gray-500">WRITTEN BY</p>
            <h1 className="text-2xl mb-3">{post.userName}</h1>
            <p className="text-gray-600 text-md line-clamp-2">
              Tempor ipsum cillum et esse ea voluptate. Ullamco cillum
              incididunt laborum labore sunt duis dolor labore minim veniam est
              Lorem. Ea labore culpa nulla irure ad id veniam. Culpa deserunt ad
              aliqua et aute sit tempor est do non eu duis. Commodo dolore Lorem
              minim voluptate sit veniam consequat. Ea laborum reprehenderit
              velit laborum velit id ea pariatur enim nisi qui.
            </p>
          </div>
        </div>
        <div className="felx mx-32 sm:mx-14 s md:mx-32 xs:mx-3">
          <h1 className="text-xl font-semibold my-5">
            Responses <span>({post.comments.length})</span>
          </h1>
          <CommentForm id={params.postId} />
        </div>
        <div className="mx-32 sm:mx-14 md:mx-32 xs:mx-3">
          <CommentLike id={params.postId} />
        </div>
      </div>
    </div>
  );
};
async function getData(id) {
  const res = await axios.get(`http://localhost:3000/api/post/${id}`);
  return res.data;
}

export default page;
