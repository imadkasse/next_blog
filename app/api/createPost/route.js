import { authOption } from "@/lib/authOption";
import Post from "@/models/post";
import User from "@/models/User";
import { connectToDB } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDB();

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
        { status: 401 }
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
    const post = new Post({
      user: userDoc._id,
      title,
      tag,
      image,
      body,
      userName: user.name,
      userImg: user.image,
    });
    await post.save();
    userDoc.posts.push(post._id);
    await userDoc.save();
    return NextResponse.json(
      {
        message: "Post created successfully",
        post: post,
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
