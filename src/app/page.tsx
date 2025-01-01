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
    <div className="flex flex-col min-h-screen relative ">
      <Image
        src="/background.jpg"
        alt="Blog background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 opacity-50"
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold italic underline  mb-4 text-sky-900 text-center">
            Welcome to the Techware Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-2">
            {displayedBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden block" // Ensures proper styling as a block
              >
                <div>
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={800}
                    height={300}
                    className="w-full h-48 object-fill"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
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
            className="bg-cyan-500 font-bold text-white py-2 px-6 mt-2 hover:bg-cyan-600 transition duration-300"
          >
            {showAllBlogs ? 'Show Less' : 'More Blogs'}
          </button>
        </main>
        <Footer />
      </div>
    </div>
  );
}

