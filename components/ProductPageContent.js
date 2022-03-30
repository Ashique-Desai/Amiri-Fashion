import PropTypes from 'prop-types'
import React from 'react'
import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import RecommendedList from './RecommendedList'




export default function ProductPageContent({ product }) {

  const images = []

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover" />
      </SwiperSlide>
    )
  })

  SwiperCore.use([Navigation, Pagination])

  return (
    <div>
      <div className="w-full flex lg:flex-1 lg:flex-row flex-col justify-between justify-items-start mt-12 lg:px-12 3xl:pr-[12vw]">
        {/* <div className="lg:w-10/12 w-full overflow-hidden lg:pl-8"> */}
        <div className="relative pt-4">
          <Swiper
            style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
            navigation
            pagination={{ clickable: true }}
            className="lg:w-[700px] w-full h-auto aspect-square mb-3"
            loop="true"
          >
            {images}
          </Swiper>
          
        </div>
        {/* </div> */}
        {/* <div> */}
        <ProductForm product={product} />
        {/* </div> */}

      </div>
      <hr className='w-full mt-10' />
      <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
    </div>
  )
}

ProductPageContent.propTypes = {
  product: PropTypes.any
}