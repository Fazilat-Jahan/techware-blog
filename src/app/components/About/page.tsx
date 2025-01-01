import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          Welcome to TechWare, your go-to source for the latest in technology, trending topics, and freelancing insights. Our mission is to provide valuable content that helps our readers stay informed and ahead in the fast-paced world of tech and digital entrepreneurship.
        </p>
        <p className="mb-4">
          Founded in 2024, TechWare has quickly become a trusted resource for tech enthusiasts, professionals, and freelancers alike. Our team of experienced writers and industry experts work tirelessly to bring you the most relevant and engaging content.
        </p>
        <p className="mb-4">
          At TechWare, we believe in the power of knowledge and the importance of staying connected in our digital age. Whether you're looking to expand your tech skills, keep up with industry trends, or navigate the world of freelancing, we're here to support you every step of the way.
        </p>
        <p>
          Thank you for being a part of our community. We look forward to growing and learning together!
        </p>
      </main>
      <Footer />
    </div>
  );
}

