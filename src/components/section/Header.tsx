'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdMenu, MdClose, MdDarkMode, MdLightMode, MdExpandMore } from 'react-icons/md'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-black px-3 py-2 rounded-md text-base font-medium">
      {children}
    </Link>
  )

  return (
    <nav className="fixed w-full top-0 backdrop-blur-xl bg-neutral-950/50 dark:bg-neutral-50/10 z-30 text-white dark:hover:text-black border-b border-neutral-700 dark:border-neutral-400 ">
      <div className='flex justify-center items-center p-2  bg-black'>
        <Link href="https://www.megalig.com/ " rel="noopener noreferrer" target="_blank" 
        className='text-sm md:text-base hover:scale-110 transition-all duration-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500'>
        -40% Intro price for the next 72 hours only! Buy now →
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white dark:text-black font-bold text-xl">
              Black World
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/product">Product</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-300 dark:hover:text-black dark:text-neutral-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                  aria-expanded={isDropdownOpen}
                >
                  Resources <MdExpandMore size={16} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-neutral-900 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-400 rounded-md shadow-lg py-1">
                    <Link href="/blog" className="block px-4 py-2 text-sm dark:text-neutral-700 dark:hover:text-black  text-gray-300 hover:text-white">Blog</Link>
                    <Link href="/faqs" className="block px-4 py-2 text-sm dark:text-neutral-700 dark:hover:text-black  text-gray-300 hover:text-white">FAQ</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm dark:text-neutral-700 dark:hover:text-black  text-gray-300 hover:text-white">Contact</Link>
                   
                  </div>
                )}
              </div>
              
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white dark:text-neutral-600 dark:hover:text-black p-2 rounded-md"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
            <div className="lg:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="dark:text-neutral-700 dark:hover:text-neutral-950 text-gray-300 hover:text-white p-2 rounded-md"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/product">Products</NavLink>
             <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-300 dark:text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                  aria-expanded={isDropdownOpen}
                >
                  Resources <MdExpandMore size={16} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 w-48 bg-neutral-900/90 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-400 rounded-md shadow-lg py-1">
                    <Link href="/blog" className="block px-4 py-2 text-sm dark:text-gray-700 dark:hover:text-black  text-gray-300 hover:text-white">Blog</Link>
                    <Link href="/faqs" className="block px-4 py-2 text-sm dark:text-gray-700 dark:hover:text-black  text-gray-300 hover:text-white">FAQ</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm dark:text-gray-700 dark:hover:text-black  text-gray-300 hover:text-white">Contact</Link>
                  </div>
                )}
             </div>
          
          </div>
        </div>
      )}
    </nav>
  )
}