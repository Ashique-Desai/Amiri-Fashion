import PropTypes from 'prop-types'
import React from 'react'
import Head from "next/head"
import { getProductsInWomenswearCollection } from "../lib/shopify"
import ProductsPageWomenswear from "../components/ProductsPageWomenswear"

export default function Footwear({  allProductsWomenswear  }) {
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
          <ProductsPageWomenswear products={allProductsWomenswear} />
        </>
    )
}

export async function getStaticProps() {
    const allProductsWomenswear  = await getProductsInWomenswearCollection();
    return {
      props: { allProductsWomenswear }, // will be passed to the page component as props
    }
}

  Footwear.propTypes = {
    allProductsWomenswear: PropTypes.any,
  }