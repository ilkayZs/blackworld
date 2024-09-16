'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import googlelogo from '../../../public/CompanyLogos/googlelogo.svg'
import linkedinlogo from '../../../public/CompanyLogos/linkedinlogo.svg'
import dockerlogo from '../../../public/CompanyLogos/dockerlogo.svg'

const images = [
  { src: googlelogo, alt: "Google Logo" },
  { src: linkedinlogo, alt: "Linkedin Logo" },
  { src: dockerlogo, alt: "Docker Logo" },
];

export const LogoAnim = () => {
  return (
    <div className="bg-neutral-950 dark:bg-white text-white dark:text-black py-8 md:py-24 md:mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-xl text-center text-neutral-50/70">Trusted by the world&apos;s most great company</h2>
        <div className="relative overflow-hidden mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
          <motion.div
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...images, ...images, ...images, ...images].map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="h-12 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}