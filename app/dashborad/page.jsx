import MenuDashborad from "@/components/dashborad/MenuDashborad";

const page = () => {
  return (
    <div className="bg-neutral-200  dark:text-primary-night  text-primary-day dark:bg-black/20 pt-32 ">
      <div className="sm:container mx-auto">
        <div className="flex flex-col items-center justify-center mb-5 xs:px-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Dashboard
          </h1>
          <p className="mt-2 md:mt-3 sm:text-xl xs:text-base text-secondary-day">
            View your dashboard, manage your posts, subscription and edit and
            profile.
          </p>
        </div>
        <MenuDashborad />
      </div>
    </div>
  );
};

export default page;
