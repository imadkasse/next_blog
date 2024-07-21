"use client";
import {
  Edit,
  LogoutOutlined,
  Person2Outlined,
  PostAddOutlined,
} from "@mui/icons-material";
import AddPost from "./AddPost";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const MenuDashborad = () => {
  const [component, setComponent] = useState(<Profile />);
  const router = useRouter();
  return (
    <div className="grid grid-cols-4  gap-2 xs:grid-cols-2 lg:grid-cols-4 py-7 ">
      <div className="flex flex-col px-4 xs:px-2 md:px-4  ">
        <button
          onClick={() => {
            setComponent(<Profile />);
          }}
          className="flex gap-3  m-2 p-2 cursor-pointer  rounded-3xl transition duration-200 hover:bg-slate-600/50"
        >
          <Person2Outlined />
          <h1>My Profile</h1>
        </button>
        <button
          onClick={() => {
            setComponent(<EditProfile />);
          }}
          className="flex gap-3  m-2 p-2 cursor-pointer  rounded-3xl transition duration-200 hover:bg-slate-600/50"
        >
          <Edit />
          <h1>Edit Profile</h1>
        </button>
        <button
          onClick={() => {
            setComponent(<AddPost />);
          }}
          className=" flex gap-3  m-2 p-2 cursor-pointer rounded-3xl transition duration-200 hover:bg-slate-600/50"
        >
          <PostAddOutlined />
          <h1>Add Post</h1>
        </button>
        <button
          onClick={() => {
            router.push("/posts/myPosts");
          }}
          className=" flex gap-3  m-2 p-2 cursor-pointer rounded-3xl transition duration-200 hover:bg-slate-600/50"
        >
          <PostAddOutlined />
          <h1>My Posts</h1>
        </button>
        <button
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/" });
          }}
          className=" flex gap-3  m-2 p-2 cursor-pointer rounded-3xl transition duration-200 hover:bg-red-600 hover:text-white "
        >
          <LogoutOutlined />
          <h1>Logout</h1>
        </button>
      </div>
      <div className="border dark:border-gray-400 border-slate-800 col-span-3 rounded-md">
        {component}
      </div>
    </div>
  );
};

export default MenuDashborad;
