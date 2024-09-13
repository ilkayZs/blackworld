import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const product = [
  {
    title: "Web Design",
    description: "Create stunning, responsive websites tailored to your brand.",
    icon: "🎨"
  },
  {
    title: "App Development",
    description: "Build powerful, user-friendly mobile applications for iOS and Android.",
    icon: "📱"
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic to your site.",
    icon: "🔍"
  },
  {
    title: "Content Creation",
    description: "Develop engaging content that resonates with your target audience.",
    icon: "✍️"
  },
  {
    title: "Digital Marketing",
    description: "Implement effective strategies to grow your online presence.",
    icon: "📈"
  },
  {
    title: "E-commerce Solutions",
    description: "Set up and optimize your online store for maximum conversions.",
    icon: "🛒"
  }
];

const ProductPage = () => {
  return (
    <div className="bg-neutral-950 dark:bg-white text-white dark:text-black  py-8 md:py-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Our Product
        </h1>
        <p className="mt-6 max-w-3xl text-xl dark:text-neutral-600 text-neutral-400">
          We offer a wide range of digital services to help your business thrive in the online world.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {product.map((product, index) => (
            <div 
              key={index}
              className="relative group dark:bg-neutral-100 bg-neutral-900/90 border border-neutral-800 dark:border-neutral-400 p-6  rounded-lg overflow-hidden hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{product.icon}</span>
                <ChevronRight className="h-5 w-5 text-neutral-400 dark:group-hover:text-neutral-950 group-hover:text-neutral-100" />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:to-neutral-800">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;