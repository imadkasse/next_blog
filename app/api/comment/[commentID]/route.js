import Comment from "@/models/Comment";
import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectToDB();

  try {
    const postId = params.commentID;

    if (!postId) {
      return NextResponse.json(
        {
          message: "No post ID provided",
        },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    }

    const postComments = await Post.findById(postId);

    if (!postComments) {
      return NextResponse.json(
        {
          message: "Post not found",
        },
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    }

    const commentIds = postComments.comments.map((comment) =>
      comment._id.toString()
    );

    const comments = await Comment.find({ _id: { $in: commentIds } });

    return NextResponse.json(
      {
        message: "Comments retrieved successfully",
        comments: comments,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Oops, an error occurred",
        error: error.message,
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}
