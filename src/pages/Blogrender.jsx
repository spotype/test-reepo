import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPost from "../../lib/getPost";
import Header from "../components/Header";

export default function Blogrender() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPost(id);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [id]);

  const [posts, setPosts] = useState({ images: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPost(id);
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />

      <div className="py-24">
        <div className="mx-auto flex xl:w-[1200px] flex-col">
          <img src={post.thumbnail} alt="product image" className="w-96" />
          <h1 className="mt-4 text-2xl font-bold">{post.title}</h1>
          <span className="text-xl font-bold text-red-600">${post.price}</span>
          <span className="text-xl font-bold">{post.discountPercentage}</span>
          <span className="text-xl font-bold">{post.rating}</span>
          <span className="text-xl font-bold">{post.stock}</span>
          <span className="text-xl font-bold">{post.brand}</span>
          <span className="text-xl font-bold">{post.category}</span>

          <div className="flex gap-5">
            {posts.images.map(function (image, index) {
              return (
                <div key={index}>
                  <img key={index} src={image} alt={`Image ${index}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
