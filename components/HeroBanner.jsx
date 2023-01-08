import Link from 'next/link'

// Import the `urlFor` function from the `lib/client` module
import { urlFor } from '../lib/client'

// This is a functional component that receives a `heroBanner` object as props
const HeroBanner = ({ heroBanner }) => (
  // Return the JSX for rendering the hero banner
  <div className="hero-banner-container">
    <div>
      {/* Render the small text from the heroBanner object */}
      <p className="featured-product">{heroBanner.smallText}</p>
      {/* Render the mid text from the heroBanner object */}
      <h3>{heroBanner.midText}</h3>
      {/* Render the large text 1 from the heroBanner object */}
      <h1>{heroBanner.largeText1}</h1>
      {/* Render the image from the heroBanner object, using the `urlFor` function to generate the URL */}
      <img
        src={urlFor(heroBanner.image)}
        alt="hero-banner"
        className="hero-banner-image"
      />

      <div>
        {/* Render a Link component that navigates to the product page for the product specified in the heroBanner object */}
        <Link href={`/product/${heroBanner.product}`}>
          {/* Render a button that contains the button text from the heroBanner object */}
          <button type="button">{heroBanner.buttonText}</button>
        </Link>

        {/* Render the description from the heroBanner object */}
        <div className="desc">
          <h5>Description</h5>
          <p> {heroBanner.desc}</p>
        </div>
      </div>
    </div>
  </div>
)

// Export the HeroBanner component
export default HeroBanner
