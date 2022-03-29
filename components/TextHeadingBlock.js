import PropTypes from 'prop-types'
import React from 'react'
// PRE-SPRING 2022 MENSWEAR

const TextHeadingBlock = (props) => {
    return (
        <div className="text-center">
        <h2 className="text-base font-extrabold mt-16 mb-16 sm:mt-28 sm:mb-28 tracking-widest">
         {props.text}
        </h2>
        </div>
    )
   
}
TextHeadingBlock.propTypes = {
    text: PropTypes.string
}

export default TextHeadingBlock