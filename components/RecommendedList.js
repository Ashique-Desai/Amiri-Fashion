import PropTypes from 'prop-types'
import React from 'react'
import ProductCard from "./ProductCard"


const RecommendedList = ({ products, current }) => {
  return (
   <>
      <div className="lg:px-12 py-16 sm:py-24">
        <h2 className="text-base font-extrabold mb-6 lg:pl-0 pl-4">
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map(product => (
              product.node.id === current ? null : <ProductCard key={product.node.id} product={product} />
            ))
          }
        </div>
      </div>
    </>
  )
}

RecommendedList.propTypes = {
  products: PropTypes.any,
  current: PropTypes.any
}

export default RecommendedList


