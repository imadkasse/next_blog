import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";
connectToDB();
export async function GET(req) {
  await connectToDB();
  try {
    const posts = await Post.find({});

    return NextResponse.json(
      {
        message: "Post GETED successfully",
        posts: posts,
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
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
