import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-neutral-950 dark:bg-white text-white dark:text-black py-8 md:py-24 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Discover the Power of{' '}
              <span className="text-neutral-400 dark:text-neutral-600">Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 dark:text-neutral-600">
              Transform your ideas into reality with our cutting-edge solutions. 
              Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white dark:bg-neutral-800 dark:hover:bg-neutral-950 dark:text-white text-black hover:bg-gray-200">
                Get Started
              </Button>
              <Button variant="outline" className="border-white dark:border-black dark:hover:bg-black dark:hover:text-white dark:text-black text-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/image/shad.png"
                alt="Shadcn Chart Design"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}