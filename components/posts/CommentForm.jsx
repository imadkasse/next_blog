"use client";
import { useState } from "react";
import axios from "axios";
import { Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";

const CommentForm = ({ id }) => {
  const [text, setText] = useState("");
  const [openResolve, setOpenResolve] = useState(false);
  const [openRejecte, setOpenRejecte] = useState(false);

  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (text !== "") {
      await axios.post(`${process.env.APP_URL}/api/createComment`, {
        text: text,
        postId: id,
      });
      setOpenResolve(true);
      setText("");
      router.refresh()
    } else {
      console.log("Opps,An Error");
      setOpenRejecte(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenResolve(false);
    setOpenRejecte(false);
  };
  return (
    <div>
      <div>
        <Snackbar
          open={openResolve}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Adding Comment"
        />
        <Snackbar
          open={openRejecte}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Opps An Error"
        />
      </div>
      <form className="my-12" onSubmit={handelSubmit}>
        <labe className="mb-2 text-base  block font-semibold after:content-['*'] after:text-red-800">
          AddComment
        </labe>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="type an comment"
          className="px-4 py-2 text-base rounded-xl bg-transparent border border-gray-400 w-full outline-blue-500"
        />
        <button className="bg-purple-700 text-white rounded-2xl p-2 text-sm font-bold w-24 hover:bg-purple-500 transition duration-200">
          Add
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
