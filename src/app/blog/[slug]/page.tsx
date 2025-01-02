'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogs } from '../../data/blog';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

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
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    const slug = params.slug as string;
    const foundBlog = blogs.find((b) => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      setBlog(null);
    }
  }, [params.slug]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author && newComment.content) {
      const comment: Comment = {
        id: Date.now(),
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment({ author: '', content: '' });
    }
  };

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
        
        <div className="text-base font-medium mb-4  text-justify ">{blog.content}</div>
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          className="md:w-1/2 md:h-1/2 w-full h-full object-cover rounded-lg mb-6"
          width={800}
          height={300} 
        />
      

        {/* Dynamic headings */}
        {Array.from({ length: 9 }, (_, index) => {
          const heading = `heading${index + 1}` as keyof Blog;
          const content = `heading${index + 1}C` as keyof Blog;
          return blog[heading] && blog[content] ? (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-2">{blog[heading]}</h2>
              <div className="text-base font-medium mb-4 text-justify">{blog[content]}</div>
            </div>
          ) : null;
        })}

        {/* Conclusion */}
        <div className="text-base font-medium mt-6 mb-8">{blog.conclusion}</div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Post a Comment</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-bold">{comment.author}</p>
              <p>{comment.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <input
              type="text"
              placeholder="Your Name"
              value={newComment.author}
              onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <textarea
              placeholder="Your Comment"
              value={newComment.content}
              onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

