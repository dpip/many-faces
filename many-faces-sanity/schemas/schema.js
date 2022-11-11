// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// {
//   name: '',
//   type: '',
//   title: '',
// },

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'home',
      type: 'document',
      title: 'Home',
      fields: [
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'ctaSnippets',
          type: 'string',
          title: 'CTA Snippets',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'donorsTitle',
          type: 'string',
          title: 'Donors Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donorImages',
          type: 'array',
          title: 'Featured Donor Images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'aboutTitle',
          type: 'string',
          title: 'About Title',
        },
        {
          name: 'aboutDescription',
          type: 'string',
          title: 'About Description',
        },
        {
          name: 'aboutSupportingContentBlocks',
          type: 'array',
          title: 'About Supporting Content Blocks',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'supportingImage',
                  type: 'image',
                  title: 'Supporting Image',
                },
                {
                  name: 'supportingContent',
                  type: 'string',
                  title: 'Supporting Content',
                },
              ],
            },
          ],
        },
        {
          name: 'application',
          type: 'file',
          title: 'Application PDF',
        },
      ],
    },
    {
      name: 'about',
      type: 'document',
      title: 'About',
      fields: [
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            {
              type: 'block',
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Center', value: 'center' },
                      { title: 'Left', value: 'left' },
                      { title: 'Right', value: 'right' },
                    ],
                    layout: 'radio',
                    isHighlighted: true,
                  },
                },
                {
                  name: 'alt',
                  type: 'text',
                  title: 'Description',
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          name: 'ctaSnippets',
          type: 'string',
          title: 'CTA Snippets',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'donorsTitle',
          type: 'string',
          title: 'Donors Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donorImages',
          type: 'array',
          title: 'Featured Donor Images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'aboutTitle',
          type: 'string',
          title: 'About Title',
        },
        {
          name: 'aboutDescription',
          type: 'string',
          title: 'About Description',
        },
        {
          name: 'aboutSupportingContentBlocks',
          type: 'array',
          title: 'About Supporting Content Blocks',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'supportingImage',
                  type: 'image',
                  title: 'Supporting Image',
                },
                {
                  name: 'supportingContent',
                  type: 'string',
                  title: 'Supporting Content',
                },
              ],
            },
          ],
        },
        {
          name: 'application',
          type: 'file',
          title: 'Application PDF',
        },
      ],
    },
    {
      name: 'donate',
      type: 'document',
      title: 'Donate',
      fields: [
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'ctaSnippets',
          type: 'string',
          title: 'CTA Snippets',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'donorsTitle',
          type: 'string',
          title: 'Donors Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donorImages',
          type: 'array',
          title: 'Featured Donor Images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'aboutTitle',
          type: 'string',
          title: 'About Title',
        },
        {
          name: 'aboutDescription',
          type: 'string',
          title: 'About Description',
        },
        {
          name: 'aboutSupportingContentBlocks',
          type: 'array',
          title: 'About Supporting Content Blocks',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'supportingImage',
                  type: 'image',
                  title: 'Supporting Image',
                },
                {
                  name: 'supportingContent',
                  type: 'string',
                  title: 'Supporting Content',
                },
              ],
            },
          ],
        },
        {
          name: 'application',
          type: 'file',
          title: 'Application PDF',
        },
      ],
    },
    {
      name: 'apply',
      type: 'document',
      title: 'Apply',
      fields: [
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'ctaSnippets',
          type: 'string',
          title: 'CTA Snippets',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'donorsTitle',
          type: 'string',
          title: 'Donors Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donorImages',
          type: 'array',
          title: 'Featured Donor Images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'aboutTitle',
          type: 'string',
          title: 'About Title',
        },
        {
          name: 'aboutDescription',
          type: 'string',
          title: 'About Description',
        },
        {
          name: 'aboutSupportingContentBlocks',
          type: 'array',
          title: 'About Supporting Content Blocks',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'supportingImage',
                  type: 'image',
                  title: 'Supporting Image',
                },
                {
                  name: 'supportingContent',
                  type: 'string',
                  title: 'Supporting Content',
                },
              ],
            },
          ],
        },
        {
          name: 'application',
          type: 'file',
          title: 'Application PDF',
        },
      ],
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'coverImage',
          type: 'image',
          title: 'Cover Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            {
              type: 'block',
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Center', value: 'center' },
                      { title: 'Left', value: 'left' },
                      { title: 'Right', value: 'right' },
                    ],
                    layout: 'radio',
                    isHighlighted: true,
                  },
                },
                {
                  name: 'alt',
                  type: 'text',
                  title: 'Description',
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: [{ type: 'author' }],
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: (Rule) => {
            return Rule.required().error(
              'Slugs dictate the blog url name split with hyphens, ex. "my-blog-name"'
            );
          },
        },
      ],
    },
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'avatar',
          type: 'image',
          title: 'Avatar',
        },
      ],
    },
    {
      name: 'contact',
      type: 'document',
      title: 'Contact',
      fields: [
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            },
          ],
        },
        {
          name: 'ctaSnippets',
          type: 'string',
          title: 'CTA Snippets',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'donorsTitle',
          type: 'string',
          title: 'Donors Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donorImages',
          type: 'array',
          title: 'Featured Donor Images',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'aboutTitle',
          type: 'string',
          title: 'About Title',
        },
        {
          name: 'aboutDescription',
          type: 'string',
          title: 'About Description',
        },
        {
          name: 'aboutSupportingContentBlocks',
          type: 'array',
          title: 'About Supporting Content Blocks',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'supportingImage',
                  type: 'image',
                  title: 'Supporting Image',
                },
                {
                  name: 'supportingContent',
                  type: 'string',
                  title: 'Supporting Content',
                },
              ],
            },
          ],
        },
        {
          name: 'application',
          type: 'file',
          title: 'Application PDF',
        },
      ],
    },
  ]),
});
