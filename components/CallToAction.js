import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

export default function CallToAction(props) {
    
    return (
        <>
            {/* added back classes: text-white */}
            <h4 className='text-lg mb-1 mt-2 sm:mb-7 uppercase font-bold text-white'>{props.title}</h4>
            {/* removed classes: text-white */}
            <p className="mb-7 text-xs">{props.description}</p>
            <Link  href={{pathname: props.url}}>
                 {/* removed classes: border-white color-amiri-white  */}
                <button className='bg-transparent text-white hover:text-black hover:bg-white border-[1px] 
                border-white sm:border-white rounded px-14 py-2 h-16 text-sm w-full sm:max-w-[200px] ml-auto mr-auto'>
                    DISCOVER
                </button>
            </Link>
        </>
    )
}

CallToAction.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string
}

