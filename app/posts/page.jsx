import Post from "@/components/posts/Post";
import axios from "axios";


const page = async () => {
  const data = await getData();
  
  return (
    <div className="bg-neutral-200  dark:text-primary-night  text-primary-day dark:bg-black/20  pt-32 py-12 ">
      <div className="sm:container mx-auto sm:p-14 lg:p-7">
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
        
      </div>
    </div>
  );
};

async function getData(){
  let data;
  try {
    const res = await axios.get(`${process.env.APP_URL}/api/posts`);
    data = res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // يمكنك معالجة الخطأ هنا حسب الحاجة
    data = { posts: [] }; // أو يمكن عرض رسالة خطأ للمستخدم
  }
  return data
}

export default page;
