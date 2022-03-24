import React from 'react'
import Image from 'next/image'
import imageWomenGoggles from '../images/goggles.jpg'
import imageKeyChain from '../images/keychain.jpg'
// import CallToAction from './CallToAction'

export default function SectionAccessories() {
    return (
        <div>
            <ul className='lg:wrapper-two-images flex flex-col lg:pl-16 lg:pr-16'>
                <li className='lg:wrapper-one-half w-full relative lg:pr-4 mb-8 lg:mb-20'>
                    <div className='image-item'>
                        {/* <img className='' src="goggles.jpg" alt="" /> */}
                        <Image className='relative'
                            src={imageWomenGoggles}
                            alt="hero"
                        />
                    </div>
                    {/* <span className='absolute z-[999]'>
                        <CallToAction />
                    </span> */}
                </li>
                <li className='lg:wrapper-one-half w-full relative lg:pl-4 mb-8 lg:mb-20'>
                    <div className='image-item'>
                        {/* <img className='' src="keychain.jpg" alt="" /> */}
                        <Image className='relative'
                            src={imageKeyChain}
                            alt="hero"
                        />
                    </div>
                    {/* <span className='absolute z-[999]'>
                        <CallToAction />
                    </span> */}
                </li>

            </ul>
        </div>
        // <div className='flex flex-shrink flex-row w-[vw] mx-auto my-0'>
        //     <Image id='image-1' className='image-diff-ht' src={imageWomenGoggles} alt="" />
        //     <Image id='image-2' className='image-diff-ht' src={imageKeyChain} alt="" />
        // </div>

    )
}
{/* <div className='flex flex-auto flex-col lg:flex-row relative pb-16 overflow-hidden h-[1000px]'>
<div className='flex flex-1 relative lg:pr-4'>
    <div className='hidden md:block overflow-hidden'>
        <Image className='absolute max-w-[50%] h-auto overflow-hidden'
            src={imageWomenGoggles}
            alt="hero"
        // layout='fill'

        />
    </div>
    <CallToAction />
</div>
<div className='flex flex-1 relative lg:pl-4'>
    <div className='hidden md:block overflow-hidden '>
        <Image className='absolute max-w-[50%] h-auto overflow-hidden'
            src={imageKeyChain}
            alt="hero"
        // layout='fill'

        />
    </div>
    <CallToAction />
</div>
</div> */}


    //     <div className='flex flex-col lg:flex-row relative pb-16 h-[1000px] overflow-hidden'>
    //     <div className='feature-image'>
    //         <img className='' src={imageWomenGoggles} width="500" height="700" alt="hero" />
    //     </div>
    //     <div className='feature-image'>
    //         <img src={imageKeyChain} alt="hero" />
    //     </div>


    // </div>