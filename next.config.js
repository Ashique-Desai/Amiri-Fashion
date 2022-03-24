/* eslint-disable no-undef */
import withPWA from "next-pwa"

export default withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API
  },
  images: {
    domains: ['cdn.shopify.com']
  }
})

