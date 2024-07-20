"use client";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import {
  Search,
  CloseRounded,
  PersonOutlined,
  DriveFileRenameOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";

const Navbar = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const [darkMode, setDarkMode] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleDropdownUserImg, setToggleDropdownUserImg] = useState(false);
  const handelMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className="dark:text-primary-night  text-primary-day  fixed w-full dark:bg-gray-800/95 z-50  bg-gray-100/90 sm:px-5 md:px-12 ">
      {/* mobile and tablet section */}
      {status === "authenticated" ? (
        <div className="  lg:hidden   flex items-center justify-between px-4">
          <div>
            <button
              onClick={() => {
                setToggleDropdown(true);
              }}
            >
              <MenuRoundedIcon className="dark:text-white text-black  text-4xl cursor-pointer" />
            </button>
          </div>
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-2">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white   cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className="dark:text-white  cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400  text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
            <button
              className="rounded-full"
              onClick={() => {
                setToggleDropdownUserImg(true);
              }}
            >
              <Image
                src={data.user.image}
                className="w-12 h-12 rounded-full"
                width={150}
                height={50}
                alt="userImg"
              />
            </button>
          </div>
          {toggleDropdownUserImg && (
            <div className="dropdownUserImg  ">
              <div className="flex  justify-end w-full p-1 cursor-pointer transition duration-200 hover:text-red-800">
                <button
                  onClick={() => {
                    setToggleDropdownUserImg(false);
                  }}
                >
                  <CloseRounded />
                </button>
              </div>
              <div className="flex flex-col p-1 my-2">
                <Link
                  href="/dashborad"
                  className="flex  justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50"
                >
                  <PersonOutlined />
                  <h1>My Account</h1>
                </Link>
                <Link
                  href="/posts/myPosts"
                  className="flex  justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50"
                >
                  <DriveFileRenameOutlineOutlined />
                  <h1>My Posts</h1>
                </Link>
                <button className="flex justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50">
                  <FavoriteBorderOutlined />
                  <h1>Wishlist</h1>
                </button>
              </div>
            </div>
          )}

          {toggleDropdown && (
            <div className="dropdown fixed">
              <div className="flex  justify-end w-full cursor-pointer transition duration-200 hover:text-red-800">
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  <CloseRounded />
                </button>
              </div>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Home
              </Link>
              <Link
                href={"/dashborad"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Dashborad
              </Link>
              <Link
                href={"/contact"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Contact Us
              </Link>
              <Link
                href={"/posts"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Posts
              </Link>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Blogs
              </Link>
            </div>
          )}
        </div>
      ) : status === "loading" ? (
        <div className="  lg:hidden   flex items-center justify-between px-4">
          <div>
            <button
              onClick={() => {
                setToggleDropdown(true);
              }}
            >
              <MenuRoundedIcon className="dark:text-white text-black  text-4xl cursor-pointer" />
            </button>
          </div>
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-2">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white   cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className="dark:text-white  cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400  text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
            <CircularProgress className="text-purple-700" />
          </div>
          {toggleDropdown && (
            <div className="dropdown fixed">
              <div className="flex  justify-end w-full cursor-pointer transition duration-200 hover:text-red-800">
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  <CloseRounded />
                </button>
              </div>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Home
              </Link>
              <Link
                href={"/dashborad"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Dashborad
              </Link>
              <Link
                href={"/contact"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Contact Us
              </Link>
              <Link
                href={"/posts"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Posts
              </Link>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Blogs
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="  lg:hidden   flex items-center justify-between px-4">
          <div>
            <button
              onClick={() => {
                setToggleDropdown(true);
              }}
            >
              <MenuRoundedIcon className="dark:text-white text-black  text-4xl cursor-pointer" />
            </button>
          </div>
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-2">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white   cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className="dark:text-white  cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400  text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
          </div>
          {toggleDropdown && (
            <div className="dropdown fixed">
              <div className="flex  justify-end w-full cursor-pointer transition duration-200 hover:text-red-800">
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  <CloseRounded />
                </button>
              </div>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Home
              </Link>
              <Link
                href={"/dashborad"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Dashborad
              </Link>
              <Link
                href={"/contact"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Contact Us
              </Link>
              <Link
                href={"/posts"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Posts
              </Link>
              <Link
                href={"/"}
                className="text-xl rounded-2xl cursor-pointer w-full text-center  p-2 transition duration-200 hover:bg-slate-600/50"
              >
                Blogs
              </Link>
              <button
                onClick={() => {
                  router.push("/api/auth/signin");
                }}
                className="bg-purple-700 text-white mt-5 rounded-2xl p-2 text-sm font-bold w-24 hover:bg-purple-500 transition duration-200"
              >
                Sgin Up
              </button>
            </div>
          )}
        </div>
      )}

      {/* Desktop section  */}
      {status === "authenticated" ? (
        <div className="xs:hidden sm:hidden md:hidden lg:flex items-center ">
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>
          <div className=" flex items-center justify-start grow gap-7 ">
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Home
            </Link>
            <Link
              href={"/dashborad"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Dashborad
            </Link>
            <Link
              href={"/contact"}
              className="text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Contact Us
            </Link>
            <Link
              href={"/posts"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Posts
            </Link>
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Blogs
            </Link>
          </div>

          <div className="flex gap-4">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white text-black text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className=" text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400 text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10  rounded-3xl " />
            <button
              className="rounded-full"
              onClick={() => {
                setToggleDropdownUserImg(true);
              }}
            >
              <Image
                src={data.user.image}
                className="w-12 h-12 rounded-full"
                width={150}
                height={50}
                alt="userImg"
              />
            </button>
          </div>
          {toggleDropdownUserImg && (
            <div className="dropdownUserImg  ">
              <div className="flex  justify-end w-full p-1 cursor-pointer transition duration-200 hover:text-red-800">
                <button
                  onClick={() => {
                    setToggleDropdownUserImg(false);
                  }}
                >
                  <CloseRounded />
                </button>
              </div>
              <div className="flex flex-col p-1 my-2">
                <Link
                  href="/dashborad"
                  className="flex  justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50"
                >
                  <PersonOutlined />
                  <h1>My Account</h1>
                </Link>
                <Link
                  href="/posts/myPosts"
                  className="flex  justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50"
                >
                  <DriveFileRenameOutlineOutlined />
                  <h1>My Posts</h1>
                </Link>
                <div className="flex justify-between items-center p-2 rounded-md cursor-pointer  hover:bg-slate-600/50">
                  <FavoriteBorderOutlined />
                  <h1>Wishlist</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : status === "loading" ? (
        <div className="xs:hidden sm:hidden md:hidden lg:flex items-center ">
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>

          <div className=" flex items-center justify-start grow gap-7 ">
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Home
            </Link>

            <Link
              href={"/contact"}
              className="text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Contact Us
            </Link>
            <Link
              href={"/posts"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Posts
            </Link>
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Blogs
            </Link>
          </div>

          <div className="flex gap-4">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white text-black text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className=" text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400 text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10  rounded-3xl " />

            <CircularProgress className="text-purple-700" />
          </div>
        </div>
      ) : (
        <div className="xs:hidden sm:hidden md:hidden lg:flex items-center ">
          <div>
            <Image
              alt="Logo"
              src={"/imgs/logo-removebg.png"}
              width={110}
              height={90}
              className="cursor-pointer"
            />
          </div>
          <div className=" flex items-center justify-start grow gap-7 ">
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Home
            </Link>

            <Link
              href={"/contact"}
              className="text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Contact Us
            </Link>
            <Link
              href={"/posts"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Posts
            </Link>
            <Link
              href={"/"}
              className=" text-xl rounded-2xl cursor-pointer  p-2 transition duration-200 hover:bg-slate-600/50"
            >
              Blogs
            </Link>
          </div>

          <div className="flex gap-4">
            {darkMode ? (
              <button onClick={handelMode}>
                <DarkMode className="dark:text-white text-black text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-600/50  rounded-3xl " />
              </button>
            ) : (
              <button onClick={handelMode}>
                <LightMode className=" text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10 rounded-3xl" />
              </button>
            )}
            <Search className="text-slate-400 text-4xl cursor-pointer h-10 w-10 transition duration-200 hover:bg-slate-700/10  rounded-3xl " />
            <button
              onClick={() => {
                router.push("/api/auth/signin");
              }}
              className="bg-purple-700 text-white rounded-2xl p-2 text-sm font-bold w-24 hover:bg-purple-500 transition duration-200"
            >
              Sgin Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
