import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  const onAdd = (product, quantity) => {
    const productInCart = cartItems.find((x) => x.id === product.id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities + 1 * quantity,
    )

    if (productInCart) {
      const updatedCartItems = cartItems.map((x) => {
        if (x.id === product.id) {
          return { ...x, quantity: x.quantity + quantity }
        }
      })

      setCartItems(updatedCartItems)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }
    toast.success(`${qty} ${product.name} added to cart`)
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1
      return (prevQty = 1)
    })
  }

  // useEffect(() => {
  //   const newTotal = cart.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0,
  //   )
  //   setTotal(newTotal)
  // }, [cart])

  // const [cart, setCart] = useState([])
  // const [total, setTotal] = useState(0)

  // const addToCart = (product) => {
  //   const item = cart.find((item) => item.id === product.id)
  //   if (item) {
  //     toast.error('This item is already in your cart')
  //     return
  //   }
  //   setCart([...cart, { ...product, quantity: 1 }])
  // }

  // const removeFromCart = (id) => {
  //   setCart(cart.filter((item) => item.id !== id))
  // }

  // const increment = (id) => {
  //   const newCart = [...cart]
  //   const index = newCart.findIndex((item) => item.id === id)
  //   newCart[index].quantity++
  //   setCart(newCart)
  // }

  // const decrement = (id) => {
  //   const newCart = [...cart]
  //   const index = newCart.findIndex((item) => item.id === id)
  //   newCart[index].quantity--
  //   setCart(newCart)
  // }

  // useEffect(() => {
  //   const newTotal = cart.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0,
  //   )
  //   setTotal(newTotal)
  // }, [cart])

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        // addToCart,
        // removeFromCart,
        // increment,
        // decrement,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
