import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

export default function CallToAction(props) {
    
    return (
        // experimental
        <>
            {/* removed classes: text-white */}
            <h4 className='text-lg mb-1 mt-2 sm:mb-7 uppercase font-bold'>{props.title}</h4>
            {/* removed classes: text-white */}
            <p className="mb-7 text-base">{props.description}</p>
            <Link  href={`/products/${'nuon-blue-cut-out-detail-ribbed-top'}`}>
                 {/* removed classes: border-white color-amiri-white text-white */}
                <button className='bg-transparent border-[1px] border-white sm:border-white rounded px-14 py-2 h-16 text-sm w-full sm:max-w-[200px] ml-auto mr-auto'>
                    DISCOVER
                </button>
            </Link>
        </>
    )
}

CallToAction.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

// Old code before refactor
 // <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
        //     <h4 className='text-lg pb-2 text-white mb-7 uppercase'>{props.title}</h4>
        //     <p className="text-white mb-7 text-base">{props.description}</p>
          
        //     <Link  href={`/products/${'nuon-blue-cut-out-detail-ribbed-top'}`}>
        //     <button className='bg-transparent border-[1px] border-white color-amiri-white rounded px-14 py-2 h-16 max-w-[200px] text-sm text-white'>DISCOVER</button>
        //     </Link>
// </div>