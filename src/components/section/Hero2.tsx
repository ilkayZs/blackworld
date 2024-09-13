import Image from 'next/image'
import React from 'react'

function Hero2() {
  return (
    <div className='bg-neutral-950 dark:bg-white text-white dark:text-black mb-24'>
        <h2 className='text-2xl md:text-4xl text-center mb-14'>
        Unleash the Future: Where Innovation Meets Possibility
        </h2>
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