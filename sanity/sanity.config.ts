import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.toString() || 'syuefp84'
console.log('🚀 ~ projectId:', projectId)

export default defineConfig({
  name: 'default',
  title: 'WinLax Portfolio',

  projectId: projectId,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
