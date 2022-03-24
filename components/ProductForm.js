import { useState, useContext } from "react"
import { formatter } from '../utils/helpers'
import ProductOptions from "./ProductOptions"
import { CartContext } from "../context/shopContext"

export default function ProductForm({ product }) {

  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1
    }
  })

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }


  return (
    <div className="lg:pr-20 p-4 flex flex-col">
      <div className="top-20 sticky w-full max-w-[500px]">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <span className="pb-3 w-full">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
        {
          product.options.map(({ name, values }) => (
            <ProductOptions
              key={`key-${name}`}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
            />
          ))
        }
        <button
          onClick={() => {
            addToCart(selectedVariant)
          }}
          className="text-white px-20 py-4 my-3 bg-gray-800 max-w-[500px] w-full">
          Add To Cart
        </button>
        {/* // new div - working */}
        <div className=" top-6 sticky">
          <p className="pt-4 mx-auto">{product.description}</p>
        </div>
      </div>

    </div>
  )
}