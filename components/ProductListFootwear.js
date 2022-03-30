import PropTypes from 'prop-types'
import React from 'react'
import ProductCard from "./ProductCard"
import Image from 'next/image'
import heroFootWear from '../images/shoe-heroImage.jpg'


const ProductListMens = ({ products }) => {
    return (
        <>
            <div className='relative w-full mt-[90px]'>
                <div className='relative block overflow-hidden box-border h-[100vw] pb-0 sm:max-h-[65vh] max-h-[256px]'>
                    <Image className='absolute w-full left-0 top-0 max-w-full h-full'
                        src={heroFootWear}
                        alt="hero"
                        objectFit="cover"
                        layout="fill"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0">
                {
                    products.map(product => (
                        <ProductCard key={product.node.id} product={product} />
                    ))
                }
           </div>
        </>
    )
}

ProductListMens.propTypes = {
    products: PropTypes.any
}
export default ProductListMens