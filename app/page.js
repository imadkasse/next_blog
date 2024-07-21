import ADS from "@/components/ADS";
import ArticleItem from "@/components/ArticleItem";
import CardAuthors from "@/components/CardAuthors";
import Tag from "@/components/Tag";
import BecomeAuthor from "@/components/BecomeAuthor";


export default async function Home() {
  console.log(process.env.APP_URL)
  return (
    <div className="border-t pt-36 dark:text-primary-night  text-primary-day">
      <div className=" sm:container mx-auto xs:pl-4 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Editor's pick
          
        </h1>
        <p className="mt-2 md:mt-3 sm:text-xl xs:text-base text-secondary-day">
          Discover the most outstanding articles in all topics of life
        </p>
        <ArticleItem />
      </div>
      {/* Newwest authors Section*/}
      <div className=" bg-neutral-200  text-black dark:text-primary-night dark:bg-black/20 px-5">
        <div className="sm:container mx-auto mt-16 pt-12 dark:text-primary-night  text-primary-day">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Newest authors
            </h1>
            <p className="mt-2 md:mt-3 sm:text-xl xs:text-base text-secondary-day">
              Say hello to future creator potentials
            </p>
          </div>
          <div className="mt-4 py-3 flex items-center   ">
            <div className="flex items-center w-full mx-2 flex-wrap gap-4 xs:justify-center md:justify-center ">
              <CardAuthors />
              <CardAuthors />
              <CardAuthors />
              <CardAuthors />
              <CardAuthors />
            </div>
          </div>
        </div>
      </div>
      {/* Tags */}
      <div className="text-black dark:text-primary-night px-5">
        <div className="sm:container mx-auto mt-16 pt-12 dark:text-primary-night  text-primary-day">
          <div className="flex flex-col ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Top trending topics
            </h1>
            <p className="mt-2 md:mt-3 sm:text-xl xs:text-base text-secondary-day">
              Discover 233 topics
            </p>
          </div>
          <div className="mt-4 py-3 flex items-center ">
            <div className="flex items-center w-full mx-2 flex-wrap gap-4 xs:justify-center  md:justify-center ">
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
        </div>
      </div>
      {/* ADS Section */}
      <div className="text-black dark:text-primary-night px-5 ">
        <div className="sm:container mx-auto mt-16 pt-12 dark:text-primary-night  text-primary-day">
          <div className="flex justify-center items-center flex-col ">
            <h1 className="mb-8 text-sm font-extralight dark:text-secondary-night text-secondary-day  ">
              -Advertisement-
            </h1>
            <ADS />
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className=" bg-neutral-200  text-black dark:text-primary-night dark:bg-black/20 px-5">
        <div className="sm:container mx-auto mt-16 py-4 dark:text-primary-night  text-primary-day">
          <BecomeAuthor />
        </div>
      </div>
    </div>
  );
}
