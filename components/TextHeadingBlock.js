import React from 'react'
// PRE-SPRING 2022 MENSWEAR

const TextHeadingBlock = (props) => {
    return (
        <div className="text-center">
        <h2 className="text-base font-extrabold mt-28 mb-28 tracking-widest">
         {props.text}
        </h2>
        </div>
    )
   
}

export default TextHeadingBlock