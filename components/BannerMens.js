// This section is the hero section of this website.

// import Link from 'next/link'
import Image from 'next/image'
// import heroLargeTrial from '../images/home-lady-in-black.jpg' 
import heroLarge from '../images/hero-1.jpg'
import heroMobileTrial from '../images/hero-mobile.jpg'
import CallToAction from './CallToAction'


export default function BannerMens(props) {
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
