import Link from 'next/link'

import { urlFor } from '../lib/client'

// This is a functional component that receives a `heroBanner` object as props
const HeroBanner = ({ heroBanner }) => (
  <div className="hero-banner-container">
    <div>
      <p className="featured-product">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img
        src={urlFor(heroBanner.image)}
        alt="hero-banner"
        className="hero-banner-image"
      />

      <div>
        <Link href="#best-selling">
          <button type="button">{heroBanner.buttonText}</button>
        </Link>

        <div className="desc">
          <h5>Description</h5>
          <p> {heroBanner.desc}</p>
        </div>
      </div>
    </div>
  </div>
)

export default HeroBanner
