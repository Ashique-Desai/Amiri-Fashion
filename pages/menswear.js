// Have to write the GraphQl query to get menswear products in lib/shopify..
import PropTypes from 'prop-types'
import React from 'react'
import Head from "next/head"
import { getProductsInMenswearCollection } from "../lib/shopify"
import ProductsPageMenswear from "../components/ProductsPageMenswear"

export default function Footwear({  allProductsMenswear  }) {
    return (
        <>
        <Head>
        <title>AMIRI - Menswear</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
          </Head>
          <ProductsPageMenswear products={allProductsMenswear } />
        </>
    )
}

export async function getStaticProps() {
    const allProductsMenswear  = await getProductsInMenswearCollection();
    return {
      props: { allProductsMenswear }, // will be passed to the page component as props
    }
}

// export async function getStaticProps() {
//   const products = await getProductsInCollection()
//   return {
//     props: { products }, // will be passed to the page component as props
//   }
// }

  Footwear.propTypes = {
    allProductsMenswear: PropTypes.any,
  }