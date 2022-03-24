// This section is the hero section of this website.

import React from 'react'
import Image from 'next/image'
import heroLarge from '../images/hero-1.jpg'
import CallToAction from './CallToAction'


export default function BannerMens() {
  return (
    <div className='relative lg:mb-16 mb-8'>
      <div className='relative block overflow-hidden box-border h-[100vh] bg-white' data-gradient="true">
        <Image className='relative'
          src={heroLarge}
          alt="hero"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <CallToAction />
    </div>
  )
}
