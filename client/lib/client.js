// Import the Sanity client and image URL builder
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

// Initialize the image URL builder with the Sanity client
const builder = imageUrlBuilder(client)

// This function generates a URL for a given image source
export const urlFor = (source) => builder.image(source)
