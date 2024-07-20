import {
  EmailOutlined,
  Facebook,
  FacebookOutlined,
  HomeOutlined,
  Instagram,
  LinkedIn,
  PublicOutlined,
  X,
} from "@mui/icons-material";

const page = () => {
  return (
    <div className="bg-neutral-200  dark:text-primary-night  text-primary-day dark:bg-black/20 pt-32 ">
      <div className="sm:container mx-auto">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Contact us
          </h1>
          <p className="mt-2 md:mt-3 sm:text-xl xs:text-base text-secondary-day">
            Drop us message and we will get back for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:px-2 py-5 gap-9 xs:grid-cols-1 xs:px-4 sm:px-0  xs:divide-y-2 md:divide-y-0">
          <div className=" ">
            <div className="uppercase grid grid-cols-1 gap-3 pl-8 ">
              <div className="flex flex-col pr-14 justify-center  mt-6">
                <div className="flex gap-2">
                  <HomeOutlined />
                  <h1 className="text-lg">address</h1>
                </div>
                <p className="text-secondary-day dark:text-secondary-night text-md capitalize">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="flex flex-col pr-14 justify-center  mt-9">
                <div className="flex gap-2">
                  <EmailOutlined />
                  <h1 className="text-lg">EMAIL</h1>
                </div>
                <p className="text-secondary-day dark:text-secondary-night text-md capitalize">
                  imad.example@example.com
                </p>
              </div>
              <div className="flex flex-col pr-14 justify-center  mt-9">
                <div className="flex gap-2">
                  <EmailOutlined />
                  <h1 className="text-lg">phone</h1>
                </div>
                <p className="text-secondary-day dark:text-secondary-night text-md capitalize">
                  000-123-456-7890
                </p>
              </div>
              <div className="flex flex-col pr-14 justify-center mt-9 ">
                <div className="flex gap-2">
                  <PublicOutlined />
                  <h1 className="text-lg">SOCIALS</h1>
                </div>
                <div className="mt-3 flex gap-2">
                  <Facebook className="cursor-pointer text-2xl" />
                  <X className="cursor-pointer text-2xl" />
                  <LinkedIn className="cursor-pointer text-2xl" />
                  <Instagram className="cursor-pointer text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <form className="grid grid-cols-1 gap-8">
              <div>
                <labe className="mb-2 text-base block font-semibold">
                  Full Name
                </labe>
                <input
                  type="text"
                  placeholder="kasse imad"
                  className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
                />
              </div>
              <div>
                <labe className="mb-2 text-base block font-semibold">Email</labe>
                <input
                  type="email"
                  placeholder="Example@ex.com"
                  className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
                />
              </div>
              <div>
                <labe className="mb-2 text-base block font-semibold">Message</labe>
                <textarea
                  placeholder="Your Message"
                  className="p-4 bg-transparent  w-full block text-sm border border-gray-400 outline-[#007bff] rounded"
                  rows="4"
                />
              </div>
              <button className="bg-purple-700 font-bold w-full text-white rounded-2xl p-2 text-sm  hover:bg-purple-500 transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
