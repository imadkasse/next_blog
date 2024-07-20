import Comment from "@/models/Comment";
import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectToDB();
  try {
    const postId = params.commentID;
    const postComments = await Post.findById(postId);


    const commentIds = postComments.comments.map((comment) =>
      comment._id.toString()
    );
    const comments = await Comment.find({ _id: { $in: commentIds } });

    return NextResponse.json(
      {
        message: "Comments GETED successfully",
        comments: comments,
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
