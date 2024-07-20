import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 dark:border-gray-50/50 border-black/50 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <Link href="/">
            <Image
              src="/imgs/logo-removebg.png"
              width={250}
              height={250}
              alt="logo"
              className="w-52"
            />
          </Link>
        </div>

        <div className="lg:flex lg:items-center md:flex md:items-center sm:flex sm:items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <Instagram className="dark:fill-gray-300  dark:hover:fill-white fill-slate-900 hover:fill-slate-600 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Facebook className="dark:fill-gray-300  dark:hover:fill-white fill-slate-900 hover:fill-slate-600 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <LinkedIn className="dark:fill-gray-300  dark:hover:fill-white fill-slate-900 hover:fill-slate-600 w-7 h-7" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <X className="dark:fill-gray-300  dark:hover:fill-white fill-slate-900 hover:fill-slate-600 w-7 h-7" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-primary-day dark:text-primary-night  ">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                Email
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                Phone
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                Address
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-primary-day dark:text-primary-night ">
            Information
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-secondary-day hover:text-black/45 transition duration-75 dark:text-secondary-night dark:hover:text-white/40 text-sm"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className=" text-sm mt-10 text-primary-day dark:text-primary-night sm:flex sm:justify-center ">
        © 2024
        <Link href="/" className="hover:underline mx-1">
          Blogs Scroll
        </Link>
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
