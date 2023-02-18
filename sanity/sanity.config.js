import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: 'project_ecommerce-next-sanity-stripe',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool(), visionTool()],
})
