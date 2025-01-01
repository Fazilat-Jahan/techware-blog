'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogs } from '../data/blog';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const CategoryPage = () => {
  const params = useParams();
  const [category, setCategory] = useState<string | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);

  useEffect(() => {
    const categorySlug = params.category as string;
    setCategory(categorySlug || null);
  }, [params.category]);

  useEffect(() => {
    if (category) {
      const blogsInCategory = blogs.filter(
        (blog) => blog.category && blog.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredBlogs(blogsInCategory);
    }
  }, [category]);

  if (!category) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 capitalize">{category} Blogs</h1>
        {filteredBlogs.length === 0 ? (
          <p>No blogs found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={800}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.content.substring(0, 100)}...</p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;

