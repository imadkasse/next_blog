import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectToDB();

  try {
    const postID = params.postID;
    const post = await Post.findById(postID);
    
    return NextResponse.json(
      {
        message: "post GETED successfully",
        post: post,
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
