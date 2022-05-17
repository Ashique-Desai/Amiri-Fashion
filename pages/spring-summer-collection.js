// work in progress 
import PropTypes from 'prop-types'
import React from 'react'
import Head from "next/head"
import { getProductsInSpringSummerCollection } from "../lib/shopify"
import ProductsPageSpringSummerCollection from "../components/ProductsPageSpringSummerCollection"

export default function SpringSummerCollection({  allProductsSpringSummerCollection  }) {
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
          <ProductsPageSpringSummerCollection products={allProductsSpringSummerCollection} />
        </>
    )
}

export async function getStaticProps() {
    const allProductsSpringSummerCollection  = await getProductsInSpringSummerCollection();
    return {
      props: { allProductsSpringSummerCollection }, // will be passed to the page component as props
    }
}

  SpringSummerCollection.propTypes = {
    allProductsSpringSummerCollection: PropTypes.any,
  }