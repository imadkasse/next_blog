"use client";
import { CloudDoneOutlined, CloudDownloadOutlined } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { CldUploadButton, getCldImageUrl } from "next-cloudinary";
import React, { useState } from "react";
const AddPost = () => {
  const [publicId, setPublicId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [bodyPost, setBodyPost] = useState("");
  const [openResolve, setOpenResolve] = useState(false);
  const [openRejecte, setOpenRejecte] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenResolve(false);
    setOpenRejecte(false);
  };
  const handleUpload = (result) => {
    const { info } = result;
    if (info && info.public_id) {
      setPublicId(info.public_id);

      // إنشاء رابط الصورة باستخدام public_id
      const url = getCldImageUrl({
        src: info.public_id,
        crop: "fill",
      });

      setImageUrl(url);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, tag, imageUrl, bodyPost);
    if (title !== "" && tag !== "" && imageUrl !== "" && bodyPost !== "") {
      await axios
        .post(
          `/api/createPost`,
          {
            title: title,
            tag: tag,
            image: imageUrl,
            body: bodyPost,
          },
          
        )
        .then((res) => {
          console.log(res);
        });
      setOpenResolve(true);
      setTitle("");
      setTag("");
      setImageUrl("");
      setBodyPost("");
    } else {
      console.log("oops an error");
      setOpenRejecte(true);
    }
  };
  return (
    <div className="p-7 ">
      <div>
        <Snackbar
          open={openResolve}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Adding Post"
        />
        <Snackbar
          open={openRejecte}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Opps An Error"
        />
      </div>
      <form className="grid grid-cols-1 gap-8 " onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 text-base block font-semibold after:content-['*'] after:text-red-800  ">
            Post Title
          </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder=""
            className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 text-base  block font-semibold after:content-['*'] after:text-red-800">
            Tags
          </label>
          <input
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
            type="text"
            placeholder=""
            className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <div>
          <label className="mb-2 text-base  block font-semibold after:content-['*'] after:text-red-800">
            bodyPost
          </label>
          <textarea
            value={bodyPost}
            onChange={(e) => {
              setBodyPost(e.target.value);
            }}
            type="text"
            placeholder=""
            className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <div>
          <label className="bg-transparent  font-semibold text-base rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
            <CloudDownloadOutlined fontSize="large" />
            <CldUploadButton
              uploadPreset="gkjupbxj"
              onUpload={handleUpload}
              className=""
            />

            <p className="text-xs font-medium  mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
        </div>
        <button className="bg-purple-700 font-bold w-full text-white rounded-2xl p-2 text-sm  hover:bg-purple-500 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
