import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripeKey)
  }
  return stripePromise
}

export default getStripe
