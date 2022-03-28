import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

export default function CallToAction(props) {
    
    return (
        <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
            <h4 className='text-lg pb-2 text-white mb-7 uppercase'>{props.title}</h4>
            <p className="text-white mb-7 text-base">{props.description}</p>
          
            <Link  href={`/products/${'nuon-blue-cut-out-detail-ribbed-top'}`}>
            <button className='bg-transparent border-[1px] border-white color-amiri-white rounded px-14 py-2 h-16 max-w-[200px] text-sm text-white'>DISCOVER</button>
            </Link>
        </div>
    )
}

CallToAction.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
