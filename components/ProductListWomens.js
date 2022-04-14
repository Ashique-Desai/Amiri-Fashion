import PropTypes from 'prop-types'
import React from "react"
import ProductCard from "./ProductCard"


const ProductListWomens = ({ products }) => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 gap-y-10 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0">
        {
          products.map(product => (
            <ProductCard key={product.node.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

ProductListWomens.propTypes = {
  products: PropTypes.any
}

export default ProductListWomens