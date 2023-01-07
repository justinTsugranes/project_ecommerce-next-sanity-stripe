import { useState } from 'react'
import { useStateContext } from '../../context/StateContext'

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai'

import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const { qty, incQty, decQty, onAdd } = useStateContext()

  const [index, setIndex] = useState(0)

  return (
    <div>
      {/* Container for the main product image and the small images */}
      <div className="product-detail-container">
        {/* Container for the main product image and the small images */}
        <div>
          {/* Container for the main product image */}
          <div className="image-container">
            {/* Render the main product image using the `urlFor` function to generate the URL. The `index` state variable is used to determine which image to display */}
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          {/* Container for the small images */}
          <div className="small-images-container">
            {/* Map through the images in the `image` array and render a small image for each one. The `setIndex` function is called on mouse enter to update the `index` state variable and display the corresponding image as the main image */}
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  // Add the "selected-image" class to the small image if it is the one currently selected
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Container for the product description, reviews, and add to cart/buy now buttons */}
        <div className="product-detail-desc">
          {/* Render the product name */}
          <h1>{name}</h1>
          {/* Container for the reviews */}
          <div className="reviews">
            {/* Render the review stars */}
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          {/* Render the product details */}
          <h4>Details: </h4>
          <p>{details}</p>
          {/* Render the product price */}
          <p className="price">${price}</p>
          <div className="quantity">
            {/* Display the "Quantity" label */}
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              {/* Display the minus button */}
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              {/* Display the current quantity */}
              <span className="num" onClick="">
                {qty}
              </span>
              {/* Display the plus button */}
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            {/* Display the "Add to Cart" button */}
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            {/* Display the "Buy Now" button */}
            <button type="button" className="buy-now" onClick={''}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar products section */}
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {/* Map over the products array and render a Product component for each product */}
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  // Query to fetch all products with their `slug` value
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `
  // Fetch the products from Sanity
  const products = await client.fetch(query)
  // Map the products to an array of objects containing the `slug` value as a URL parameter
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))
  // Return the paths and set `fallback` to 'blocking' to show a loading screen while the data is being fetched
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  // Fetch the product from Sanity with the slug parameter passed to the function
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  // Fetch all products from Sanity
  const productsQuery = '*[_type == "product"]'
  // Get the product and products from Sanity
  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)
  // Log the product to the console for debugging purposes
  // console.log(product)
  // Return the products and product data as props to the component
  return {
    props: { products, product },
  }
}

export default ProductDetails
