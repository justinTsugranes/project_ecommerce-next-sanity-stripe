import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

// Navbar component that displays a logo and a cart icon with a number indicating the quantity of items in the cart
const Navbar = () => (
  <div className="navbar-container">
    {/* The logo is a link to the homepage */}
    <p className="logo">
      <Link href="/">misfitDodo Headphones</Link>
    </p>
    {/* The cart icon, when clicked, redirects the user to the cart page */}
    <button type="button" className="cart-icon" onClick="">
      <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
    </button>
  </div>
)

export default Navbar
