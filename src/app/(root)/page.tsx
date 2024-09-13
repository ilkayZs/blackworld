import Faqs from '@/components/section/Faqs'
import Hero from '@/components/section/Hero'
import Hero2 from '@/components/section/Hero2'
import KeyFeatures from '@/components/section/KeyFeatures'

import PricingTable from '@/components/section/Pricing'
import TestimonialsSection from '@/components/section/Testimonials'
import React from 'react'

function page() {
  return (
    <main>
      <Hero />
      <Hero2/>
      <KeyFeatures/>
      <TestimonialsSection/>
      <PricingTable/>
      <Faqs/>
    </main>
  )
}

export default page