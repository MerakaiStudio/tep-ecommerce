import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '026mt5q0',
  dataset: 'production',
  apiVersion: '2022-09-25',
  useCdn: true,
  token: process.env.PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
