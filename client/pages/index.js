import React from 'react'

// Import the `Product`, `HeroBanner`, and `FooterBanner` components
import { Product, HeroBanner, FooterBanner } from '../components'

// Import the `client` object for making queries to the Sanity CMS
import { client } from '../lib/client'

// This is a functional component that receives an array of `products` and an array of `bannerData` as props
const Home = ({ products, bannerData }) => {
  // Return the JSX for rendering the home page
  return (
    <>
      {/* Render the HeroBanner component, passing in the first element of the bannerData array as props */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading" id="best-selling">
        <h2>Best Selling Products</h2>
        <p>High quality headphones and speakers</p>
      </div>
      <div className="products-container">
        {/* Map over the `products` array and render a Product component for each product */}
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* Render the FooterBanner component */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

// This function is executed on the server-side to populate the props for the Home component
export const getServerSideProps = async () => {
  // Query for all products in the Sanity CMS
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  // Query for all banner data in the Sanity CMS
  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  // Return the props for the Home component
  return {
    props: { products, bannerData },
  }
}

// Export the Home component
export default Home
