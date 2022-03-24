import PropTypes from 'prop-types'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className='block break-words hyphens-auto pb-16 px-0 ml-auto mr-auto absolute left-0 top-0 w-full'>
        {children}
        <Footer />
      </main>
      
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.string
}