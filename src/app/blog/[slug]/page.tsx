'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogs } from '../../data/blog';
import Image from 'next/image';
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

interface Blog {
  title: string;
  slug: string;
  content: string;
  heading1: string;
  heading1C: string;
  heading2: string;
  heading2C: string;
  heading3: string;
  heading3C: string;
  heading4?: string;
  heading4C?: string;
  heading5?: string;
  heading5C?: string;
  heading6?: string;
  heading6C?: string;
  heading7?: string;
  heading7C?: string;
  heading8?: string;
  heading8C?: string;
  heading9?: string;
  heading9C?: string;
  conclusion: string;
  imageUrl: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const slug = params.slug as string;
    const foundBlog = blogs.find((b) => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      setBlog(null);
    }
  }, [params.slug]);

  if (!blog) {
    return (
      <div>
        <Header />
        <p className="p-8 text-center">Blog post not found.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className='md:flex md:flex-row items-center justify-center'>
        <div className="text-base font-medium mb-4 md:w-3/5 text-justify md:p-6">{blog.content}</div>
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          className="w-1/2 h-1/2 object-cover rounded-lg mb-6"
          width={800}
          height={300} 
        />
        </div>

        {/* Dynamic headings */}
        {Array.from({ length: 9 }, (_, index) => {
          const heading = `heading${index + 1}` as keyof Blog;
          const content = `heading${index + 1}C` as keyof Blog;
          return blog[heading] && blog[content] ? (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-2">{blog[heading]}</h2>
              <div className="text-base font-medium mb-4">{blog[content]}</div>
            </div>
          ) : null;
        })}

        {/* Conclusion */}
        <div className="text-base font-medium mt-6">{blog.conclusion}</div>
      </main>
      <Footer />
    </div>
  );
}

