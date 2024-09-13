import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
export default function Component() {
    return (
      <footer className="bg-neutral-950 dark:bg-white py-8 border-t border-neutral-700 dark:border-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className=''>
              <h2 className="text-2xl font-bold dark:text-black text-white">Black World</h2>
              <p className=" dark:text-black text-white">Copyright © 2023 Black World. All rights reserved.</p>
              <Link href="/terms" className="pr-2 text-sm dark:text-neutral-700 dark:hover:text-black  text-gray-300 hover:text-white">Terms of Service</Link>
              <Link href="/privacy-policy" className=" text-sm dark:text-neutral-700 dark:hover:text-black  text-gray-300 hover:text-white">Privacy Policy</Link> 
              <div className='mt-6'>
              <h3 className="text-lg font-semibold mb-4 text-white dark:text-neutral-950 ">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://x.com/megaligx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                  <FaXTwitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                  <FaLinkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            </div>
            <div className=''>
              <h3 className="text-lg font-semibold mb-4 dark:text-black text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-black text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-950  transition-colors duration-300">
                    Contact
                  </Link>
                </li>
               
              </ul>
            </div>
            
          </div>
        </div>
      </footer>
    )
  }