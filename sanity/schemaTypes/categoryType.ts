import {TagIcon} from '@sanity/icons'
import { subtle } from 'crypto'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
      defineField({
      name: 'image',
      type: 'image',
      title:"Category Image",
      options:{
        hotspot:true,
      },
    }),
  ],
  preview:{
    select:{
      title:"title",
      subtitle:"description",
      media:"image",
    },
  }
})
