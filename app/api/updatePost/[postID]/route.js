import { connectToDB } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/authOption";
import User from "@/models/User";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await connectToDB();
  const postID = params.postID;
  const { title, tag, image, body } = await req.json();

  try {
    const session = await getServerSession({
      req,
      res: NextResponse,
      authOption,
    });
    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    }
    if (!title || !tag || !image || !body) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const { user } = session;
    const userDoc = await User.findOne({ email: user.email });
    if (!userDoc) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const postUpdating = await Post.findByIdAndUpdate(
      postID,
      {
        user: userDoc._id,
        title,
        tag,
        image,
        body,
        userName: user.name,
        userImg: user.image,
      },
      { new: true }
    );

    if (!postUpdating) {
      return NextResponse.json(
        { message: "Post not found" },
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

    postUpdating.save();
    userDoc.posts.push(postUpdating._id);
    await userDoc.save();

    return NextResponse.json(
      {
        message: "Post updated successfully",
        post: postUpdating,
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
