'use client';
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { blogs } from './data/blog';

export default function HomePage() {
  const [displayedBlogs, setDisplayedBlogs] = useState(blogs.slice(0, 3));
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const toggleBlogs = () => {
    if (showAllBlogs) {
      setDisplayedBlogs(blogs.slice(0, 3));
    } else {
      setDisplayedBlogs(blogs);
    }
    setShowAllBlogs(!showAllBlogs);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* <Image
        src="/background.jpg"
        alt="Blog background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 opacity-50"
      /> */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
          {/* <h1
  className="text-2xl sm:text-3xl md:text-4xl font-bold italic underline mb-6 sm:mb-8 lg:mb-4 text-center">
  Welcome to the Techware Blog
</h1> */}

          <h1
            className="text-3xl font-extrabold italic text-center capitalize bg-clip-text mb-6 sm:mb-8 lg:mb-4"
          // style={{
          //   backgroundImage: 'url("/background.jpg")',
          //   backgroundSize: "fill",
          //   backgroundPosition: "center",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          //   WebkitTextStroke: "1.5px white",
          // }}
          >
            {/* Welcome to the Techware Blog <br /> */}
            Where Tech <span className="text-cyan-600">Meets</span> Curiosity<br />
          </h1>
          <h2 className="flex justify-center items-center w-full px-2 md:p-0 md:w-3/5 text-lg font-bold italic text-center capitalize bg-clip-text mb-6 sm:mb-8 lg:mb-4 text-gray-700">
            Discover insights, trends, and innovations shaping the world of tech.
            Join TechWare Blog to stay informed and inspired.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mb-6 sm:mb-4">
            {displayedBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden block transition-transform duration-300 hover:scale-105"
              >
                <div>
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={800}
                    height={300}
                    className="w-full h-40 sm:h-48 object-fill"
                  />
                  <div className="p-4">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                      {blog.title}
                    </h2>
                    <span className="text-cyan-600 hover:text-cyan-800 font-medium underline">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleBlogs}
            className="bg-gradient-to-r from-slate-900 to-cyan-500 font-bold text-white py-2 px-4 sm:px-6 rounded-md hover:bg-cyan-600 transition duration-300 text-sm sm:text-base md:mb-4 mb-2 shadow-lg"
          >
            {showAllBlogs ? 'Show Less' : 'More Blogs'}
          </button>
        </main>
        <Footer />
      </div>
    </div>
  );
}

