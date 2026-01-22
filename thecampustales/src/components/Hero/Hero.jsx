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
        <h1 className="text-4xl font-bold lg:text-8xl">
          Welcome to Campus Tales
        </h1>
        <p className="text-white-500 text-lg ">
          Stories from campus.
Clarity for life.
        </p>
<Link
  to="/search"
  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-black rounded-xl text-lg font-bold transition-colors duration-200 hover:bg-orange-600 w-fit"
>
  Explore Blogs
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
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
