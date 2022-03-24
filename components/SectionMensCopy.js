import React from 'react'
import Image from 'next/image'
import imageShoe from '../images/home-shoe.jpg'
import imageBlackJeans from '../images/home-jeans-black.jpg'
import CallToAction from './CallToAction'

export default function SectionMensCopy() {
    return (
        <>
            <ul className='lg:wrapper-two-images flex flex-col'>
                <li className='lg:wrapper-one-half w-full relative lg:pr-4 lg:mb-0 mb-8'>
                    <div className='image-item' data-gradient="true">
                        <Image className='relative'
                            src={imageShoe}
                            alt="hero"
                            // objectFit='cover'
                            // layout='fill'
                        />
                    </div>
                    <span className='absolute z-[999] bottom-6'>
                        <CallToAction />
                    </span>
                </li>
                <li className='lg:wrapper-one-half w-full relative lg:pl-4 lg:mb-0 mb-8'>
                    <div className='image-item' data-gradient="true">
                        <Image className='relative'
                            src={imageBlackJeans}
                            alt="hero"
                            // objectFit='cover'
                            // layout='fill'
                        />
                    </div>
                    <span className='absolute z-[999] bottom-6'>
                        <CallToAction />
                    </span>
                </li>
            </ul>
        </>

    )
}