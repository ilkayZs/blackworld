import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-neutral-950 dark:bg-white text-white dark:text-black py-16 md:py-24 mt-16">
      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                We are a forward-thinking company dedicated to innovation and excellence. 
                Founded in 2010, we've been at the forefront of technological advancements, 
                consistently delivering cutting-edge solutions to our clients.
              </p>
              <p className="text-lg mb-4">
                Our team of experts brings diverse skills and experiences, 
                allowing us to tackle complex challenges and drive meaningful change 
                across various industries.
              </p>
              <Button className="bg-white dark:bg-neutral-800 dark:hover:bg-neutral-950 dark:text-white text-black hover:bg-gray-200">
                Learn More
              </Button>
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
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "We constantly push boundaries and explore new ideas." },
              { title: "Integrity", description: "We uphold the highest standards of honesty and ethics." },
              { title: "Collaboration", description: "We believe in the power of teamwork and shared success." }
            ].map((value, index) => (
              <div key={index} className="border dark:border-neutral-200 border-neutral-700 p-6 rounded-lg bg-neutral-900/90 dark:bg-neutral-100">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "CEO" },
              { name: "John Smith", role: "CTO" },
              { name: "Alice Johnson", role: "Design Lead" },
              { name: "Bob Williams", role: "Marketing Director" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src="/profilepic/bay1.png"
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="dark:text-neutral-600 text-neutral-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}