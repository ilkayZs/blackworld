import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-neutral-950 dark:bg-white text-white dark:text-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-8">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-neutral-900/90 border-neutral-700 border dark:border-neutral-400 dark:bg-neutral-200 text-white dark:text-neutral-950 ">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-neutral-200 text-black dark:text-white dark:bg-neutral-950/90 border border-neutral-700 dark:border-neutral-400" />
                  <Input placeholder="Last Name" className="bg-neutral-200 text-black dark:text-white dark:bg-neutral-950/90 border border-neutral-700 dark:border-neutral-400" />
                </div>
                <Input placeholder="Email" type="email" className="bg-neutral-200 text-black dark:text-white dark:bg-neutral-950/90 border border-neutral-700 dark:border-neutral-400" />
                <Input placeholder="Subject" className="bg-neutral-200 text-black dark:text-white dark:bg-neutral-950/90 border border-neutral-700 dark:border-neutral-400" />
                <Textarea placeholder="Your message" className="bg-neutral-200 text-black dark:text-white dark:bg-neutral-950/90 border border-neutral-700 dark:border-neutral-400" />
                <Button type="submit" className="w-full bg-neutral-200 text-black dark:text-white dark:bg-neutral-900/90 border border-neutral-700 dark:border-neutral-400 dark:hover:bg-neutral-950 hover:bg-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-neutral-900/90 dark:bg-neutral-200 dark:text-neutral-950 text-white border border-neutral-700 dark:border-neutral-400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>contact@example.com</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/90 dark:bg-neutral-200 dark:text-neutral-950 text-white border border-neutral-700 dark:border-neutral-400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+1 (555) 1223-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/90 dark:bg-neutral-200 dark:text-neutral-950 text-white border border-neutral-700 dark:border-neutral-400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Business Street, Suite 100</p>
                <p>Cityville, State 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact