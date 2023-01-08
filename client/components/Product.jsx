import React from 'react'
import Link from 'next/link'

// Import the `urlFor` function from the `lib/client` module
import { urlFor } from '../lib/client'

// This is a functional component that receives a `product` object as props
const Product = ({ product: { image, name, slug, price } }) => {
  // Return the JSX for rendering the product card
  return (
    <div>
      {/* Render a Link component that navigates to the product page for the current product */}
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {/* Render the image for the product, using the `urlFor` function to generate the URL */}
          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          {/* Render the name of the product */}
          <p className="product-name">{name}</p>
          {/* Render the price of the product */}
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

// Export the Product component
export default Product
