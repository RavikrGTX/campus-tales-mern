// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
// import CallToAction from '../CallToAction';
import { useEffect, useState } from "react";
import PostCard from "../PostCard";

import "./Hero.css";
import { Button } from "flowbite-react";

const Hero = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="hero">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to Campus Tales
        </h1>
        <p className="text-white-500 text-md ">
          Stories from campus.
Clarity for life.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm  font-bold hover:underline"
        >
           <span className="px-2 py-1 bg-black  rounded-lg text-white">All Posts</span> 
        </Link>

        {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

        {/* <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          {posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-center">
                Recent Posts
              </h2>
              <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <Link
                to={"/search"}
                className="text-lg text-teal-500 hover:underline text-center"
              >
                View all posts
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
