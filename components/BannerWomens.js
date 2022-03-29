import React from 'react'
import Image from 'next/image'
import imageLadyinBlack from '../images/home-lady-in-black.jpg'
import TextHeadingBlock from './TextHeadingBlock'
import CallToAction from './CallToAction'

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
                {/* experimental */}
                <div className='w-1/4 absolute' >
                    <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40] text-white'>
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
                    <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
                        <CallToAction
                            title='Autumn Winter 2022 Menswear Show'
                            description='AMIRI’s singular journey cornerstones the 
                        Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                        runway show in his home of Los Angeles – a 
                        proud moment for him and his team.'
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
