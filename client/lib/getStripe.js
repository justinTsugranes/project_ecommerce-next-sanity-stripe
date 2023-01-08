import { loadStripe } from '@stripe/stripe-js'

// Declare a variable to hold the Stripe promise
let stripePromise

// getStripe function returns a promise with the Stripe object
// It loads the Stripe object from the Stripe API with the provided publishable key
const getStripe = () => {
  // If the promise is not defined, create a new promise
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  // Return the promise
  return stripePromise
}

export default getStripe
