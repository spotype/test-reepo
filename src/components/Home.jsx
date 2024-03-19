import Travelslide from "../pages/Travelslide";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <main className="cover flex items-center justify-center">
          <div className="mx-auto flex w-11/12 items-center justify-center xl:w-[1250px] xl:items-end xl:justify-start">
            <div className="w-[500px]">
              <div className="text-center xl:text-start">
                <h1
                  className={`font-bold text-cyan-50 text-5xl shadow-2xl xl:text-6xl`}
                >
                  It&apos;s a Big World Out There, Go Explore
                </h1>

                <p className="mt-4 text-gray-100">
                  Conveniently customize proactive web services for leveraged
                  without continuously aggregate frictionlessly or
                  welliesrichard.and very customize continually.
                </p>

                <div className="flex gap-4 mt-5">
                  <button className="font-bold py-3 px-6 bg-yellow-400">
                    Get Exploration
                  </button>
                  <button className="font-bold py-3 px-6 bg-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Travelslide />
      </div>
    </div>
  );
}
