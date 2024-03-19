import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getAllPost from "../../lib/getAllPost";
import Header from "./Header";

export default function Blog() {
  const [posts, setPosts] = useState({ products: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getAllPost();
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />

      <div>
        <div className="py-28">
          <div className="mx-auto flex flex-col w-11/12 lg:w-[1250px] items-center">
            <h1 className="text-center font-bold text-3xl py-5">My Blogs</h1>
            <div className="grid gap-8 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
              {posts.products.map(function (res) {
                return (
                  <NavLink
                    to={`/blog/${res.id}`}
                    key={res.id}
                    className="navlink"
                  >
                    <div
                      key={res.id}
                      className="w-72 p-4 bg-white shadow-lg rounded-xl"
                    >
                      <img
                        src={res.thumbnail}
                        width={500}
                        height={500}
                        className="w-full h-44 object-cover object-center rounded-lg images"
                        alt="product image"
                      />
                      <div className="mt-4">
                        <h1 className="font-bold text-xl">{res.title}</h1>
                        <span className="text-red-600 font-bold text-lg">
                          ${res.price}
                        </span>
                        <p className="truncate-4-lines">{res.description}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
