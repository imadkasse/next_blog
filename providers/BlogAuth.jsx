"use client";
import { SessionProvider } from "next-auth/react";

const BlogAuth = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default BlogAuth;
