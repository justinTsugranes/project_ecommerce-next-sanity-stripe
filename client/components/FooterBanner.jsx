import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../lib/client'

const FooterBanner = ({
  footerBanner: {
    desc,
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        {/* Left Side */}
        <div className="left">
          {/* Discount amount, large text and sale duration */}
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        {/* Right Side */}
        <div className="right">
          {/* Small and middle text, description and button */}
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>

          {/* Link to product page with the product slug */}
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        {/* Image in the banner */}
        <Image
          src={urlFor(image)}
          alt="footer-banner"
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner
