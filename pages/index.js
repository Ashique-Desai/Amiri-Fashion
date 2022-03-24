import React from "react"
import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductListMens"
// import Hero from "../components/BannerMens"
// import SectionOne from "../components/SectionMens"
// import Carousel from "../components/Carousel"
// import SocialResponsibility from "../components/SocialResponsibility"
// import Shipping from "../components/Shipping"
import Head from 'next/head'
// import CTASignup from "../components/CTASignUp"
import MainWomensWear from "../components/BannerWomens"
import BannerMens from "../components/BannerMens"
import SectionMens from "../components/SectionMens"
import ProductListWomens from "../components/ProductListWomens"
import SectionWomens from "../components/SectionWomens"
import SectionAccessories from "../components/SectionAccessories"
import SectionWomensCopy from "../components/SectionWomensCopy"
import ProductListMens from "../components/ProductListMens"
import BannerWomens from "../components/BannerWomens"
import BannerMensCopy from "../components/BannerMensCopy"
import SectionMensCopy from "../components/SectionMensCopy"



export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>AMIRI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
      {/* <BannerMensCopy /> */}
      <BannerMens />
      <SectionMens />
      {/* <SectionMensCopy /> */}
      <ProductListMens products={products} />
      <BannerWomens />
      <ProductListWomens products={products} />
      <SectionAccessories />
    </>)
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}