import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Faqs() {
  return (
    <div className='bg-neutral-950 dark:bg-white text-white dark:text-black py-8 md:py-24 mt-16'>
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
    <h2 className='text-4xl'>Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className='w-full'> 
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the Next.js design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it good?</AccordionTrigger>
      <AccordionContent>
      Yes, this theme is very good.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it nice?</AccordionTrigger>
      <AccordionContent>
      Yes, this theme is very nice.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Is it real?</AccordionTrigger>
      <AccordionContent>
       Yes, this theme is real.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger>Is it landing page?</AccordionTrigger>
      <AccordionContent>
      Maybe...
      </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>
  </div>
  )
}

export default Faqs