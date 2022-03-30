import PropTypes from 'prop-types'
import React from 'react'
import Head from "next/head"
import { getAllProductsTaggedFootwear } from "../lib/shopify"
import ProductListFootwear from "../components/ProductListFootwear"

export default function Story({products}) {
    return (
        <>
        <Head>
        <title>AMIRI - Footwear</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
          </Head>
          <ProductListFootwear products={products} />
        </>
    )
}

export async function getStaticProps() {
    const products = await getAllProductsTaggedFootwear()
    return {
      props: { products }, // will be passed to the page component as props
    }
  }

  Story.propTypes = {
    products: PropTypes.any
  }