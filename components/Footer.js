import React from 'react'
import Link from "next/link"
const navigation1 = [
  { name: 'Menswear', href: '/menswear' },
  { name: 'Womenswear', href: '/womenswear' },
  { name: 'Accessories', href: '/accessories' },
  {name: 'Footwear', href: '/footwear'},
  { name: 'Shipping', href: '/shipping' },
]

const navigation2 = [
  { name: 'FAQs', href: '/faq' },
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Returns And Exchanges', href: '/returns' },
  // {name: 'Impact', href: '#'},

]

export default function Footer() {
  return (
    <footer className="relative bg-transparent mt-0 lg:mt-16 lg:py-24 pt-14 pb-6 px-2 overflow-hidden sm:px-6 lg:px-16 uppercase">
      <div className="ml-auto mr-auto lg:pr-60 pr-0 flex lg:flex-row-reverse flex-col lg:justify-between">
        <nav className="lg:hidden flex flex-col text-xs">
          <div className="text-current px-4 lg:pl-0 py-2 font-semibold">
            <p>Main</p>
            <hr className="line bg-slate-300 m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation1.map((item, i) => (
              <div key={i} className="px-4 lg:py-2 py-0 text-current">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        <nav className="flex flex-col lg:mt-0 mt-4 text-xs">
          <div className="text-current px-4 py-2 font-semibold">
            <p>Talk To Us<br />Hello@AMIRI.com</p>
            <hr className="line bg-slate-300 m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation2.map((item, i) => (
              <div key={i} className="px-4 lg:py-2 py-0 text-current">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        <nav className="lg:flex hidden flex-col text-xs sm:mr-20">
           <div className="text-current px-4 py-2 font-semibold">
            <p>Main</p>
            <hr className="line bg-slate-300 m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation1.map((item, i) => (
              <div key={i} className="px-4 lg:py-2 py-0">
                <Link href={item.href} className="text-current">
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        <div className="px-4 lg:pl-0 sm:mr-20 py-2">
          <p className="lg:mt-0 mt-8 text-current text-xs">
            &copy; 2022 AMIRI.
          </p>
          <hr className="line bg-slate-300 m-0 my-2 align-text-left"></hr>
          <p className="text-current m-0 my-2 text-xs lg:py-2 py-0">
            Our vision is to design and deliver<br className="xl:hidden" /> fashion, while always keeping it fresh.
          </p>
        </div>

      </div>
    </footer>
  )
}