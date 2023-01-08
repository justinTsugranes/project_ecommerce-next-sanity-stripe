import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  const onAdd = (product, quantity) => {
    // Check if the product is already in the cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id,
    )
    // Update the total price and quantity
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      // If the product is already in the cart, update the quantity of that product
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
      })
      setCartItems(updatedCartItems)
    } else {
      // If the product is not in the cart, add it to the cart with the specified quantity
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])
    }
    // Show a toast message indicating that the product was added to the cart
    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const onRemove = (id) => {
    // Find the product in the cart
    const foundProduct = cartItems.find((item) => item._id === id)
    // Find the index of the product in the cart
    const index = cartItems.findIndex((cartProduct) => cartProduct._id === id)
    // Create a copy of the cart items
    let updatedCart = [...cartItems]
    // Remove the found product from the cart
    updatedCart.splice(index, 1)
    // Update the total price and quantity
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity,
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity,
    )
    // Update the cart items
    setCartItems(updatedCart)
  }

  const toggleCartItemQuantity = (id, quantity) => {
    // Find the product in the cart
    const foundProduct = cartItems.find((item) => item._id === id)
    // Find the index of the product in the cart
    const index = cartItems.findIndex((product) => product._id === id)
    // Create a copy of the cart items
    let updatedCart = [...cartItems]

    if (quantity === 'inc') {
      // Increment the quantity of the found product
      updatedCart[index] = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      }
      // Increase the total price and quantity
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (quantity === 'dec') {
      // Decrement the quantity of the found product if it's greater than 1
      if (foundProduct.quantity > 1) {
        updatedCart[index] = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        }
        // Decrease the total price and quantity
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
    // Update the cart items
    setCartItems(updatedCart)
  }

  const incQty = () => {
    // Increment the quantity value by 1
    setQty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    // Decrement the quantity value by 1, but prevent it from going below 1
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1
      return (prevQty = 1)
    })
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        qty,
        showCart,
        totalPrice,
        totalQuantities,
        decQty,
        incQty,
        onAdd,
        onRemove,
        setCartItems,
        setShowCart,
        setTotalPrice,
        setTotalQuantities,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
