import Image from 'next/image'
import React from 'react'

function Hero2() {
  return (
    <div className='bg-neutral-950 dark:bg-white text-neutral-50 dark:text-black md:mt-24 mb-24'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-14'>
        <h2 className='text-2xl md:text-4xl text-center'>
          Unleash the Future: Where Innovation Meets Possibility
        </h2>
        <div className='max-w-2xl mx-auto'>
          <p className='text-center text-base mt-4 dark:bg-white text-neutral-50/70 dark:text-black/70'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas consequatur quam itaque a tempore aliquid natus, fugiat accusantium debitis. Quaerat doloremque voluptates natus nulla? Natus quam odit omnis quo!
          </p>
        </div>
      </div>
      <div className='mx-4'>
        <Image
          src="/image/shad.png"
          alt='world image'
          width={1000}
          height={100}
          className='mx-auto object-contain rounded'
        />
      </div>
    </div>
  )
}

export default Hero2