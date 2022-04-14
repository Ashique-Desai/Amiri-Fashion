import PropTypes from 'prop-types'
import React from 'react'
import 'tailwindcss/tailwind.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'

const publicPages = ['/', '/products/[product]', '/faq', '/jobs', '/privacy', '/returns', 
                      '/terms', '/shop', '/shipping', '/story', '/footwear', '/menswear']
// Supplying a theme prop for clerk
 const theme = {
    general: {
      color: "#000000",
      backgroundColor: "#ffffef",
      fontColor: "#1d2228",
      labelFontWeight: "300",
      borderRadius: "0px",
    },
    buttons: {
      fontColor: "#333",
    },
 }

export default function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();
  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname)
  const router = useRouter()

  return (
    <ClerkProvider theme={theme}>
      {isPublicPage ? (
        <ShopProvider>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ShopProvider>

      ) : (
        <>
          <SignedIn>
            <ShopProvider>
              <Layout>
                <Component {...pageProps} key={router.asPath} />
              </Layout>
            </ShopProvider>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  )
}

// export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
  
}



