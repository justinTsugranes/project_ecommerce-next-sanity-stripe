// Import the Sanity client and image URL builder
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Initialize the Sanity client with the specified project ID, dataset, API version, and access token
export const client = sanityClient({
  projectId: 'z1asrl4s',
  dataset: 'production',
  apiVersion: '2023-01-05',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// Initialize the image URL builder with the Sanity client
const builder = imageUrlBuilder(client)

// This function generates a URL for a given image source
export const urlFor = (source) => builder.image(source)
