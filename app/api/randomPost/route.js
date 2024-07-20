import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();
  try {
    const count = await Post.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomPost = await Post.findOne().skip(random);
    return NextResponse.json(
      {
        message: "Post created successfully",
        randomPost: randomPost,
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    console.log(count);
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
