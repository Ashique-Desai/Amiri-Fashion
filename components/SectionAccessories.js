import React from 'react'
import Image from 'next/image'
import imageWomenGoggles from '../images/goggles.jpg'
import imageKeyChain from '../images/keychain.jpg'
import Link from 'next/link'
// import CallToAction from './CallToAction'

export default function SectionAccessories() {
    return (
        <div>
            <ul className='lg:wrapper-two-images flex flex-col lg:pl-16 lg:pr-16'>
                <li className='lg:wrapper-one-half w-full relative lg:pr-4 mb-8 lg:mb-20'>
                    <Link href={`/accessories`}>
                        <a className='image-item'>
                            <Image className='relative'
                                src={imageWomenGoggles}
                                alt="hero"
                            />
                        </a>
                    </Link>
                </li>
                <li className='lg:wrapper-one-half w-full relative lg:pl-4 mb-8 lg:mb-20'>
                    <Link href={`/accessories`}>
                        <a className='image-item'>
                            <Image className='relative'
                                src={imageKeyChain}
                                alt="hero"
                            />
                        </a>
                    </Link>
                </li>

            </ul>
        </div>

    )
}
