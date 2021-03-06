import React from "react"
import { 
         getProductsInMenswearCollectionHomePage, 
         getProductsInWomenswearCollectionHomePage
       } from "../lib/shopify"
import Head from 'next/head'
// import CTASignup from "../components/CTASignUp"
import BannerMens from "../components/BannerMens"
import SectionMens from "../components/SectionMens"
import ProductListWomens from "../components/ProductListWomens"
import SectionAccessories from "../components/SectionAccessories"
import ProductListMens from "../components/ProductListMens"
import BannerWomens from "../components/BannerWomens"

// eslint-disable-next-line react/prop-types
export default function Home({ productsMenswearHomePage, productsWomenswearHomePage }) {
  return (
    <>
      <Head>
        <title>AMIRI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
      <BannerMens />
      <SectionMens />
      <ProductListMens products={productsMenswearHomePage} />
      <BannerWomens />
      <ProductListWomens products={productsWomenswearHomePage} />
      <SectionAccessories />
    </> 
  )
}

export async function getStaticProps() {
  const productsMenswearHomePage = await  getProductsInMenswearCollectionHomePage()
  const productsWomenswearHomePage = await getProductsInWomenswearCollectionHomePage()
 
  return {
    props: { productsMenswearHomePage, productsWomenswearHomePage }, // will be passed to the page component as props
  }
}