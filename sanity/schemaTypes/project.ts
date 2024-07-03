import {rule} from 'postcss'
import {defineField, defineType} from 'sanity'

export const ProjectsType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'time',
      title: 'Time completed',
      type: 'date',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'informationTitle',
              title: 'Information Title',
              type: 'string',
            },
            {
              name: 'informationType',
              type: 'string',
              options: {
                list: ['string', 'url'],
                layout: 'radio',
              },
            },
            {
              name: 'informationDescription',
              title: 'Information Description',
              type: 'string',
              hidden: ({parent}) => parent?.informationType === 'url' || !parent?.informationType,
            },
            {
              name: 'informationUrl',
              title: 'Information Url',
              type: 'object',
              hidden: ({parent}) =>
                parent?.informationType === 'string' || !parent?.informationType,
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'Url',
                  type: 'url',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          name: 'technology',
          title: 'Technology',
          type: 'string',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          name: 'projectImage',
          title: 'Project Image',
          type: 'image',
        },
      ],
    }),
  ],
})
