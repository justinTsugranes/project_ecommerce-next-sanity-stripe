import React from 'react'

import { Product, HeroBanner, FooterBanner } from '../components'

import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
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
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

// This function is executed on the server-side to populate the props for the Home component
export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData },
  }
}

export default Home
