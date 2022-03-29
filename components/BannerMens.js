// This section is the hero section of this website.
import React from 'react'
import Image from 'next/image'
import heroLarge from '../images/hero-1.jpg'
import CallToAction from './CallToAction'


export default function BannerMens() {
  return (
    <div className='relative lg:mb-16 mb-8 w-full'>
      <div className='relative block overflow-hidden box-border h-[100vh] bg-white' data-gradient="true">
        <Image className='relative'
          src={heroLarge}
          alt="hero"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* experimental */}
      <div className='w-1/4 absolute' >
        <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-12 z-[40] text-white'>
          <CallToAction
            title='Autumn Winter 2022 Menswear Show'
            description='AMIRI’s singular journey cornerstones the 
          Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
          runway show in his home of Los Angeles – a 
          proud moment for him and his team.'
          />
        </div>

      </div>
      {/* <div className='w-1/4 absolute' >
        <CallToAction 
          title='Autumn Winter 2022 Menswear Show'
          description='AMIRI’s singular journey cornerstones the 
          Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
          runway show in his home of Los Angeles – a 
          proud moment for him and his team.'
        />
      </div> */}
    </div>
  )
}
