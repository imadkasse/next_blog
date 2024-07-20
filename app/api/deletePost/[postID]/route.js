import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectToDB();
  const postID = params.postID;
  try {
    const post = await Post.findByIdAndDelete(postID);
    return NextResponse.json(
      {
        message: "Post Deleted successfully",
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
