import Link from "next/link";
import Image from "next/image"; // Import the next/image component for optimized images
import { FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 to-indigo-800 pt-20 pb-8 text-white overflow-hidden shadow-2xl">
      {/* Decorative Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,104.74,29,158,9C230.37,21,284,1.79,338,0c65.25-2,130.77,21.63,196,32,86,13,172-3,258-10,70.59-5,137.19-2.71,207,6.91V0Z"
            opacity=".3"
            className="fill-indigo-600"
          ></path>
          <path
            d="M0,0V15.81C47.42,42.65,104.48,55,158,43c62.36-14.15,116.06-47.55,178-55,86-10,172,18,258,31,70.59,9,137.19,11.17,207,3.3V0Z"
            opacity=".5"
            className="fill-indigo-700"
          ></path>
          <path
            d="M0,0V5.63C47.42,32,104.48,44,158,31c62.36-13,116.06-41.3,178-48,86-10,172,14,258,25,70.59,8,137.19,7.17,207,0V0Z"
            className="fill-indigo-800"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center md:text-left py-10">
        {/* Logo Section with Image */}
        <div className="flex items-center space-x-3 mb-6 lg:mb-0">
          <Image 
            src="/images/logo.png"  // Path to your logo image
            alt="LOGISTOCEAN Logo"  // Alternative text for the logo
            width={40}  // Adjust width as needed
            height={40}  // Adjust height as needed
            className="animate-bounce"
          />
          <span className="text-2xl font-extrabold">LogistOcean</span>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 lg:mb-0">
          <div className="space-y-2">
            <h4 className="font-semibold uppercase">Product</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase">Developers</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline">
                  Public API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-500">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-pink-500">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 text-sm text-white opacity-80">
        © 2025 LOGISTOCEAN. All rights reserved.
      </div>
    </footer>
  );
}
