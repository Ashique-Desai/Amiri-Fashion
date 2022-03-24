import React from 'react'
import Image from 'next/image'
import imageWomenInBlazer from '../images/women-in-blazer.jpg'
import imageWomenPosingBlazer from '../images/women-posing-full-blazer.jpg'
import CallToAction from './CallToAction'

export default function SectionWomensCopy() {
    return (
        <div>
            <ul className='wrapper-two-images'>
                <li className='wrapper-one-half relative lg:pr-3'>
                    <div className='image-item' data-gradient="true">
                        {/* <img className='' src="goggles.jpg" alt="" /> */}
                        <Image className='relative'
                            src={imageWomenInBlazer}
                            alt="hero"
                        />
                    </div>
                    <span className='absolute z-[999]'>
                        <CallToAction />
                    </span>
                </li>
                <li className='wrapper-one-half relative lg:pl-3'>
                    <div className='image-item' data-gradient="true">
                        {/* <img className='' src="keychain.jpg" alt="" /> */}
                        <Image className='relative'
                            src={imageWomenPosingBlazer}
                            alt="hero"
                        />
                    </div>
                    <span className='absolute z-[999]'>
                        <CallToAction />
                    </span>
                </li>

            </ul>
        </div>

    )
}