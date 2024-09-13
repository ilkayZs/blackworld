import React from 'react'
import Image from 'next/image'

function KeyFeatures() {
  const features = [
    { title: "Feature One", description: "Describe the first key feature of your product or service here.", image: "/image/shad.png" },
    { title: "Feature Two", description: "Highlight another important aspect of what you offer.", image: "/image/shad2.png" },
    { title: "Feature Three", description: "A third key feature to show why customers should choose you.", image: "/image/shad.png" },
    { title: "Feature Four", description: "A fourth key feature to demonstrate your product's capabilities.", image: "/image/shad2.png" },
    { title: "Feature Five", description: "Showcase a fifth important aspect of your service.", image: "/image/shad.png" },
    { title: "Feature Six", description: "The sixth key feature that sets you apart from competitors.", image: "/image/shad2.png" },
  ];

  return (
    <section className="bg-neutral-950 dark:bg-white text-white dark:text-black mt-8 md:py-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-900 dark:bg-neutral-100 rounded-sm border dark:border-neutral-300 border-neutral-800 overflow-hidden shadow-md hover:shadow-xl">
              <div className="relative h-72 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent">
                <div className="p-8 border-t border-neutral-800 dark:border-neutral-300 bg-neutral-950/90 dark:bg-neutral-100/90">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-300 dark:text-neutral-700">{feature.description}</p>
              </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures