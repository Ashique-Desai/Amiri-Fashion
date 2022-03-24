import Link from 'next/link'

export default function CallToAction({ product }) {
    
    return (
        <div className='bottom-left-aligned lg:ml-16 ml-6 lg:mb-20 mb-10 z-[40]'>
            {/* <h4 className='text-xl pb-2'>Get 50% Off!</h4> */}
            <Link  href={`/products/${'nuon-blue-cut-out-detail-ribbed-top'}`}>
            <button className='bg-transparent border-[1px] border-white color-amiri-white rounded px-14 py-2 h-16 max-w-[200px] text-sm'>DISCOVER</button>
            </Link>
        </div>
    )
}