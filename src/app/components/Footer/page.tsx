import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-cyan-500 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-cyan-600 pb-6">
          {/* Contact Info */}
          <div className="border-b md:border-b-0 md:border-r border-cyan-600 pb-6 md:pb-0 md:pr-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: techware-solutions@gmail.com</p>
            <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="hover:text-cyan-200">
              LinkedIn: linkedin.com/techware/founder
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-b md:border-b-0 md:border-r border-cyan-600 pb-6 md:pb-0 md:pr-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-cyan-200">Home</Link>
              </li>
              <li>
                <Link href="/trending" className="hover:text-cyan-200">Trending</Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-cyan-200">Tech</Link>
              </li>
              <li>
                <Link href="/freelancing" className="hover:text-cyan-200">Freelancing</Link>
              </li>
              <li>
                <Link href="/components/About" className="hover:text-cyan-200">About Us</Link>
              </li>
              <li>
                <Link href="/components/Contact" className="hover:text-cyan-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="mb-4">Stay updated with the latest tech news and articles.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-slate-800 text-white focus:ring-2 focus:ring-cyan-400 mb-2"
              />
              <button
                type="submit"
                className="w-full boreder shadow-lg bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links
        <div className="mt-8 flex justify-center space-x-6 border-b border-cyan-600 pb-6">
          <Link href="#" className="hover:text-cyan-200">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="hover:text-cyan-200">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-cyan-200">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link href="#" className="hover:text-cyan-200">
            <i className="fab fa-instagram"></i>
          </Link>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-8 text-center  text-sm text-cyan-100">
          &copy; {new Date().getFullYear()} TechWare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
