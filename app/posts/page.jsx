import Post from "@/components/posts/Post";
import axios from "axios";

const page = async () => {
  const data = await getData();

  if (!data.posts || data.posts.length === 0) {
    return (
      <div className="bg-neutral-200 dark:text-primary-night text-primary-day dark:bg-black/20 pt-32 py-12">
        <div className="sm:container mx-auto sm:p-14 lg:p-7 flex justify-center">
          <p>No posts available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-200 dark:text-primary-night text-primary-day dark:bg-black/20 pt-32 py-12">
      <div className="sm:container mx-auto sm:p-14 lg:p-7">
        <div className="flex gap-5 flex-wrap xs:justify-center lg:justify-start">
          {data.posts.map((post) => (
            <Post
              id={post._id}
              key={post._id}
              tag={post.tag}
              body={post.body}
              imgUrlPost={post.image}
              imgUrlUser={post.userImg}
              name={post.userName}
              date={post.createdAt}
              likes={post.likes}
              commentsCount={post.comments.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
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

export default page;
