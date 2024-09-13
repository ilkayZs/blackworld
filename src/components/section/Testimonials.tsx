import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/profilepic/bay1.png"
  },
  {
    name: "Bob Smith",
    role: "Designer, CreativeCo",
    content: "I've never been more productive. This tool is a game-changer.",
    avatar: "/profilepic/bay1.png"
  },
  {
    name: "Carol Davis",
    role: "Freelancer",
    content: "The customer support is top-notch. They're always there when you need them.",
    avatar: "/profilepic/bay1.png"
  },
  {
    name: "Carol Davis",
    role: "Freelancer",
    content: "The customer support is top-notch. They're always there when you need them.",
    avatar: "/profilepic/bay1.png"
  },
  {
    name: "Carol Davis",
    role: "Freelancer",
    content: "The customer support is top-notch. They're always there when you need them.",
    avatar: "/profilepic/bay1.png"
  },
  {
    name: "Carol Davis",
    role: "Freelancer",
    content: "The customer support is top-notch. They're always there when you need them.",
    avatar: "/profilepic/bay1.png"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="bg-neutral-950 dark:bg-white text-white dark:text-black py-16 md:mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-900 dark:bg-neutral-200 p-6 rounded-lg shadow-lg border border-neutral-700 dark:border-neutral-400">
              <p className="mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}