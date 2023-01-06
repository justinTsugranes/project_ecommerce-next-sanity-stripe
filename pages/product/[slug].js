import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {
  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
export default ProductDetails

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == ${slug}][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  // Return the props for the Home component
  return {
    props: { product, products },
  }
}
