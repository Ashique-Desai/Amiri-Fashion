import React from 'react'
import Image from 'next/image'
import imageLadyinBlack from '../images/home-lady-in-black.jpg'
import CTAdelete from './CTAdelete' 
import TextHeadingBlock from './TextHeadingBlock'

export default function BannerWomens() {
    return (
        <div className='block relative mb-16'>
            <div className='relative'>
                <TextHeadingBlock text='SPRING-SUMMER 2022 WOMENSWEAR' />
                <div className='relative block mt-16 overflow-hidden box-border h-[100vh]' data-gradient="true">
                    <Image className='relative'
                        src={imageLadyinBlack}
                        alt="hero"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                {/* <CallToAction /> */}
                <CTAdelete description='Description text' />
            </div>
        </div>
    )
}
