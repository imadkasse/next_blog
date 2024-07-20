import Image from "next/image";

const BecomeAuthor = () => {
  return (
    <div className="flex xs:flex-col md:flex-row justify-between items-center mb-2">
      <div className=" flex flex-col justify-between   py-12  ">
        <h3 className="text-neutral-400 text-sm font-medium  ">
          SUPPER CHANGE YOUR PLANNING POWERS
        </h3>
        <h1 className="font-semibold text-3xl sm:text-4xl mt-3">
          Become an author and share your great stories
        </h1>
        <p className="mt-8 text-neutral-500 dark:text-neutral-400">
          Become an author you can earn extra income by writing articles. Read
          and share new perspectives on just about any topic. Everyone’s
          welcome.
        </p>
        <button className="text-center bg-purple-700 text-white rounded-2xl  text-lg font-bold w-52 p-3  mt-8 hover:bg-purple-700/80 transition duration-200">
          Become an author
        </button>
      </div>
      <div className="flex items-center justify-center grow">
        <Image
          src="/imgs/desk.png"
          width={1000}
          height={500}
          className="contactImg"
          alt="contactImg"
        />
      </div>
    </div>
  );
};

export default BecomeAuthor;
