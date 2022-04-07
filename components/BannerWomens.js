import React from 'react'
import Image from 'next/image'
import imageLadyinBlack from '../images/home-lady-in-black.jpg'
import TextHeadingBlock from './TextHeadingBlock'
import CallToAction from './CallToAction'

export default function BannerWomens() {
    return (
        <div className='block relative mb-16 w-full'>
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
                {/* CTA Section */}
                <span className='left-0 top-0 mt-5 relative z-[40] w-full sm:bottom-6 sm:absolute sm:w-1/4'>
                        <div className='relative text-white sm:absolute sm:bottom-0 sm:left-0 lg:ml-16 ml-6 mr-6 lg:mb-20 mb-10 z-[40] mix-blend-difference'>
                            <CallToAction title='Womenswear SPRING-SUMMER 2022' description='The timeless archetypal AMIRI woman is introduced: empowered and at ease, 
                            with total clarity of purpose.'
                                url='/footwear'
                            />
                        </div>
                    </span>
                {/* Previous code below */}
                {/* <div className='w-1/4 absolute' >
                    <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40] text-white'>
                        <CallToAction
                            title='SPRING-SUMMER 2022 Womenswear'
                            description='The timeless archetypal AMIRI woman is introduced: empowered and at ease, 
                            with total clarity of purpose.'
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
