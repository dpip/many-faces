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
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'donateUrl',
          type: 'url',
          title: 'Donate URL',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
      ],
    },
    {
      name: 'join',
      type: 'document',
      title: 'Join',
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
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
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
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
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
          name: 'type',
          title: 'Type',
          type: 'string',
          validation: (Rule) => {
            return Rule.required();
          },
          options: {
            list: [
              { title: 'Standard', value: 'standard' },
              { title: 'Testimonial', value: 'testimonial' },
              { title: 'Guest', value: 'guest' },
            ],
          },
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => [
            Rule.required(),
            Rule.max(50).warning('Shorter titles are usually better'),
          ],
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
          name: 'quote',
          type: 'string',
          title:
            'Quote - only used for testimonial posts (not required)',
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
          options: {
            source: 'title',
          },
          validation: (Rule) => {
            return Rule.required().error(
              'Slugs dictate the blog url name split with hyphens, ex. "manyfaces.com/my-post-title". One can be entered custom or auto-generated by selecting the generate button.'
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
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: 'founderAvatar',
          type: 'image',
          title: 'Avatar',
        },
        {
          name: 'founderTitle',
          type: 'string',
          title: 'Founder Title',
        },
        {
          name: 'contactIntro',
          type: 'string',
          title: 'Contact Intro',
        },
        {
          name: 'emailTitle',
          type: 'string',
          title: 'Email Title',
        },
        {
          name: 'email',
          type: 'url',
          title: 'Email',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['mailto'],
            }),
        },
        {
          name: 'phoneTitle',
          type: 'string',
          title: 'Phone Title',
        },
        {
          name: 'phone',
          type: 'url',
          title: 'Phone',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['tel'],
            }),
        },
        {
          name: 'facebookTitle',
          type: 'string',
          title: 'Facebook Title',
        },
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
        {
          name: 'instagramTitle',
          type: 'string',
          title: 'Instagram Title',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
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
      ],
    },
  ]),
});
