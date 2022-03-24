import React from 'react'
import CallToAction from '../components/CallToAction'

export default function test2() {
    return (
        <div>
            <ul className='wrapper-two-images'>
                <li className='wrapper-one-half relative'>
                    <div className='image-item' data-gradient="true">
                        <img className='' src="goggles.jpg" alt="" />
                    </div>
                    <span className='absolute z-[999]'>
                        <CallToAction />
                    </span>
                </li>
                <li className='wrapper-one-half'>
                    <div className='image-item' data-gradient="true">
                        <img className='' src="keychain.jpg" alt="" />
                    </div>
                    <span className='absolute z-[999]'>
                        <CallToAction />
                    </span>
                </li>

            </ul>
        </div>

    )
}