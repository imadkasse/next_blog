import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const session = useSession();
  return (
    <div className="p-7 w-full h-full rounded-md grid md:grid-cols-3 xs:grid-cols-1 xs:gap-3 items-center grid-rows-1 text-primary-day dark:text-primary-night">
      <div className="items-center flex justify-center">
        <Image
          src={session?.data?.user?.image}
          width={150}
          height={50}
          alt="imgProfile"
          className="rounded-full w-36 h-36"
        />
      </div>
      <div className="grid grid-rows-3 ">
        <h1 className="row-span-2 text-2xl cursor-pointer">{session?.data?.user?.name}</h1>
        <p className="text-lg text-secondary-day dark:text-secondary-night cursor-pointer">
        {session?.data?.user?.email}
        </p>
      </div>
      <div className="  grid grid-cols-2 gap-4">
        <Facebook
          className="cursor-pointer hover:text-gray-400 transition duration-150 dark:hover:text-gray-400"
          fontSize="large"
        />
        <X
          className="cursor-pointer hover:text-gray-400 transition duration-150 dark:hover:text-gray-400"
          fontSize="large"
        />
        <LinkedIn
          className="cursor-pointer hover:text-gray-400 transition duration-150 dark:hover:text-gray-400"
          fontSize="large"
        />
        <Instagram
          className="cursor-pointer hover:text-gray-400 transition duration-150 dark:hover:text-gray-400"
          fontSize="large"
        />
      </div>
    </div>
  );
};

export default Profile;
