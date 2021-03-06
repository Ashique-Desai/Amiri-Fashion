// work in progress
import PropTypes from 'prop-types'
import React from 'react'
import Head from "next/head"
import { getProductsInAccessoriesCollection } from "../lib/shopify"
import ProductsPageAccessories from "../components/ProductsPageAccessories"

export default function Accessories({  allProductsAccessories  }) {
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
          <ProductsPageAccessories products={allProductsAccessories} />
        </>
    )
}

export async function getStaticProps() {
    const allProductsAccessories  = await getProductsInAccessoriesCollection();
    return {
      props: { allProductsAccessories }, // will be passed to the page component as props
    }
}

  Accessories.propTypes = {
    allProductsAccessories: PropTypes.any,
  }