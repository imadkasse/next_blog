import Post from "@/models/post";
import { connectToDB } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();

  try {
    const count = await Post.countDocuments();
    if (count === 0) {
      return NextResponse.json(
        {
          message: "No posts available",
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
    }

    const random = Math.floor(Math.random() * count);
    const randomPost = await Post.findOne().skip(random);

    return NextResponse.json(
      {
        message: "Post retrieved successfully",
        randomPost: randomPost,
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
