import PropTypes from 'prop-types'
import React from 'react'
import ProductCard from "./ProductCard"
import TextHeadingBlock from "./TextHeadingBlock"


const ProductListAll = ({ products }) => {
  return (
    <>
      <TextHeadingBlock text='All Products - Men, Women' />
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          products.map(product => (
            <ProductCard key={product.node.id} product={product} />
          ))
        }
      </div>
    {/* </div> */}
    </>
  )
}

ProductListAll.propTypes = {
  products: PropTypes.any
}
export default ProductListAll