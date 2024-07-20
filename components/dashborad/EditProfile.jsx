const EditProfile = () => {
  return (
    <div className="p-7">
      <form className="grid grid-cols-1 gap-8">
        <div>
          <labe className="mb-2 text-base block font-semibold after:content-['*'] after:text-red-800">
            New First Name
          </labe>
          <input
            type="text"
            placeholder="imad"
            className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <div>
          <labe className="mb-2 text-base block font-semibold after:content-['*'] after:text-red-800">
            New Last Name
          </labe>
          <input
            type="text"
            placeholder="kasse"
            className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <div>
          <labe className="mb-2 text-base block font-semibold after:content-['*'] after:text-red-800">
            Password
          </labe>
          <input
            type="password"
            placeholder="******"
            className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <button className="bg-purple-700 font-bold w-full text-white rounded-2xl p-2 text-sm  hover:bg-purple-500 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
