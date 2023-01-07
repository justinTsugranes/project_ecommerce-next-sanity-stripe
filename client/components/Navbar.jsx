import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

// Navbar component that displays a logo and a cart icon with a number indicating the quantity of items in the cart
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      {/* The logo is a link to the homepage */}
      <p className="logo">
        <Link href="/">misfitDodo Headphones</Link>
      </p>
      {/* The cart icon, when clicked, redirects the user to the cart page */}
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* The Cart component */}
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
