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
                    {/* experiment */}
                    <span className='left-0 top-0 mt-5 relative z-[40] w-full sm:bottom-6 sm:absolute sm:w-1/2'>
                        <div className='relative text-white sm:absolute sm:bottom-0 sm:left-0 lg:ml-16 ml-6 mr-6 lg:mb-20 mb-10 z-[40] mix-blend-difference'>
                            <CallToAction title='Footwear Men' description='AMIRI’s singular journey cornerstones the 
                                Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                                runway show in his home of Los Angeles – a 
                                proud moment for him and his team.'
                                url='/footwear'
                            />
                        </div>
                    </span>
                </li>
                {/* original */}
                {/* <span className='absolute z-[40] bottom-6 w-1/2'>
                        <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
                            <CallToAction title='Footwear Men' description='AMIRI’s singular journey cornerstones the 
                                Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                                runway show in his home of Los Angeles – a 
                                proud moment for him and his team.'
                            />
                        </div>
                    </span> */}
                {/* <div className='left-0 top-0 mt-5 relative z-[40] w-full'>
                        <CallToAction className='text-black' title='Footwear Men' description='AMIRI’s singular journey cornerstones the 
                            Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                            runway show in his home of Los Angeles – a 
                            proud moment for him and his team.' 
                        />
                </div> */}
                <li className='lg:wrapper-one-half w-full relative lg:pl-4 lg:mb-0 mb-8'>
                    <div className='image-item' data-gradient="true">
                        <Image className='relative'
                            src={imageBlackJeans}
                            alt="hero"
                        // objectFit='cover'
                        // layout='fill'
                        />
                    </div>
                    {/* experiment */}
                    <span className='left-0 top-0 mt-5 relative z-[40] w-full sm:bottom-6 sm:absolute sm:w-1/2'>
                    <div className='relative text-white sm:absolute sm:bottom-0 sm:left-0 lg:ml-16 ml-6 mr-6 lg:mb-20 mb-0 sm:mb-10 z-[40] mix-blend-difference'>
                            <CallToAction title='Menswear' description='AMIRI’s singular journey cornerstones the 
                                Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                                runway show in his home of Los Angeles – a 
                                proud moment for him and his team.'
                               
                            />
                        </div>
                    </span>
                    {/* <span className='absolute z-[40] bottom-6 w-1/2'>
                        <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
                            <CallToAction title='Menswear' description='AMIRI’s singular journey cornerstones the 
                            Autumn-Winter 2022 collection, which marks Mike Amiri’s debut 
                            runway show in his home of Los Angeles – a 
                            proud moment for him and his team.'
                            />
                        </div>
                    </span> */}
                </li>
            </ul>
        </>

    )
}