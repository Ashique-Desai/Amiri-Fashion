import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { formatter } from '../utils/helpers'


const ProductCard = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  // eslint-disable-next-line no-unused-vars
  const price = product.node.priceRange.minVariantPrice.amount
  // eslint-disable-next-line no-unused-vars
  const compareAtPrice = product.node.compareAtPriceRange.maxVariantPrice.amount

  return (
    <Link
      href={`/products/${handle}`}>
       <a className="group">
        <div className=" bg-gray-200 overflow-hidden aspect-square">
          <div className="relative group-hover:opacity-75 h-full">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
            {/* Visible at larger screen */}
            <span className='hidden lg:inline-block absolute bottom-0 ml-16 mb-4 text-xs'><p>{title}</p></span>
          </div>
        </div>
       
        {/* <button className='bg-sassy-pink color-off-white rounded-full px-4 py-2 my-3'>Add to Cart | {formatter.format(price)}</button>
        <p className="mt-1 text-base">{formatter.format(price)}  |  <span><del>{formatter.format(compareAtPrice)}</del></span></p> */}
        {/* Visibile for Mobile device */}
         <span className='inline-block lg:hidden relative bottom-0 text-xs'><p className='ml-6 mt-4'>{title}</p></span>
      </a>
    </Link>
    
  )
}

ProductCard.propTypes = {
  product: PropTypes.any
}

export default ProductCard