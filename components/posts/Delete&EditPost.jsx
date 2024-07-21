"use client";

import { Close, CloudDownloadOutlined } from "@mui/icons-material";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { CldUploadButton, getCldImageUrl } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteAndEditPost = ({ id }) => {
  const [modal, setModal] = useState(false);
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

  const router = useRouter();
  const handelEdit = async (e) => {
    e.preventDefault();
    if (title !== "" && tag !== "" && imageUrl !== "" && bodyPost !== "") {
      await axios.put(`/api/updatePost/${id}`, {
        title: title,
        tag: tag,
        image: imageUrl,
        body: bodyPost,
      });
      setOpenResolve(true);
      setBodyPost("");
      setTag("");
      setTitle("");
      router.refresh();
    } else {
      console.log("Opps an Error");
      setOpenRejecte(true);
    }
  };
  const handelDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/deletePost/${id}`);
      setOpenResolve(true);
      router.refresh();
    } catch (error) {
      console.log(error);
      setOpenRejecte(true);
    }
  };
  return (
    <div className="">
      <div>
        <Snackbar
          open={openResolve}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Ok"
        />
        <Snackbar
          open={openRejecte}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Opps An Error"
        />
      </div>
      <button
        className="text-blue-600 px-1 lg:border-r-2  border-slate-800 dark:border-white "
        onClick={() => {
          setModal(true);
        }}
      >
        Edit
      </button>

      <button
        className="text-red-600 px-1 transition duration-150 hover:text-red-900"
        onClick={handelDelete}
      >
        Delete
      </button>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80">
            <form className="space-y-4" onSubmit={handelEdit}>
              <button
                className="flex justify-end w-full"
                onClick={() => setModal(false)}
                type="button"
              >
                <Close
                  className="cursor-pointer hover:text-red-600 transition duration-150"
                  fontSize="medium"
                />
              </button>
              <div>
                <label className="mb-2 text-base px-2 font-semibold flex after:content-['*'] after:text-red-800">
                  Post Title
                </label>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 dark:border-gray-600 w-full outline-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 text-base px-2 flex font-semibold after:content-['*'] after:text-red-800">
                  Tags
                </label>
                <input
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                  type="text"
                  className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 dark:border-gray-600 w-full outline-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 text-base px-2 flex font-semibold after:content-['*'] after:text-red-800">
                  bodyPost
                </label>
                <textarea
                  value={bodyPost}
                  onChange={(e) => {
                    setBodyPost(e.target.value);
                  }}
                  className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 dark:border-gray-600 w-full outline-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="bg-transparent font-semibold text-base rounded w-full h-24 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 dark:border-gray-600 border-dashed mx-auto font-[sans-serif]">
                  <CloudDownloadOutlined fontSize="large" />
                  <CldUploadButton
                    uploadPreset="gkjupbxj"
                    onUpload={handleUpload}
                  />
                </label>
              </div>
              <button className="bg-purple-700 dark:bg-purple-600 font-bold w-full text-white rounded-2xl p-2 text-sm hover:bg-purple-500 dark:hover:bg-purple-400 transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAndEditPost;
