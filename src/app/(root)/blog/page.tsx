import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock3Icon } from 'lucide-react'

const blogPosts = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of HTML, CSS, and JavaScript to kickstart your web development journey.",
    author: "Jane Doe",
    date: "May 15, 2024",
    readTime: "5 min read",
    image: "/image/shad2.png",
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Explore the potential impact of AI on various industries and our daily lives.",
    author: "John Smith",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: "/image/shad2.png",
  },
  {
    title: "Mastering React Hooks",
    excerpt: "Dive deep into React Hooks and learn how to build more efficient and cleaner React applications.",
    author: "Emily Johnson",
    date: "May 10, 2024",
    readTime: "10 min read",
    image: "/image/shad2.png",
  },
  // Add more blog posts as needed
]

const BlogPage = () => {
  return (
    <div className="bg-neutral-950 dark:bg-white text-white dark:text-black  py-8 md:py-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-8">
          Our Blog
        </h1>
        <p className="mt-4 text-xl text-neutral-400 dark:text-neutral-600 mb-12">
          Stay updated with our latest insights and stories.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-neutral-900 text-white dark:text-neutral-950 dark:bg-neutral-200 border-neutral-700 dark:border-neutral-400 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white dark:text-neutral-950">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-white dark:text-neutral-950">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white dark:text-neutral-950">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.date}</span>
                  <Clock3Icon className="w-4 h-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
              <CardFooter>
                <Button variant="outline" className="w-full border border-neutral-700 dark:border-neutral-400">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage