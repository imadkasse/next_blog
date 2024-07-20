import { authOption } from "@/lib/authOption";
import Comment from "@/models/Comment";
import Post from "@/models/post";
import User from "@/models/User";
import { connectToDB } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDB();

  const { text, postId } = await req.json();

  try {
    const session = await getServerSession({
      req,
      res: NextResponse,
      authOption,
    });
    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }
    if (!text || !postId) {
      return NextResponse.json(
        {
          message: "Missing required fields",
          error: error.message,
        },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const { user } = session;
    const userCheck = await User.findOne({ email: user.email });
    if (!userCheck) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const newComment = new Comment({
      text,
      user: userCheck._id, // assuming user.id is available, otherwise use user._id or user.id depending on your user schema
      post: post._id,
      userName: user.name,
      userImg: user.image,
    });
    await newComment.save();
    post.comments.push(newComment._id);
    await post.save();
    return NextResponse.json(
      {
        message: "Comment created successfully",
        comment: newComment,
      },
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Oops, an error occurred",
        error: error.message,
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
