import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

export default function CTAtrial(props) {
    
    return (
        <div className='bottom-left-aligned ml-8 mb-20 z-[999]'>
            <h4 className='text-xl pb-2 color-amiri-white'>{props.description}</h4>
            <Link  href={`/products/${'nuon-blue-cut-out-detail-ribbed-top'}`}>
            <button className='bg-transparent border-[1px] border-white color-amiri-white rounded px-14 py-2 h-16 max-w-[200px] text-sm'>DISCOVER</button>
            </Link>
        </div>
    )
}

CTAtrial.propTypes = {
    description: PropTypes.string
}