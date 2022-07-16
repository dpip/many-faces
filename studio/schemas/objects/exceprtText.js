export default {
  title: 'Excerpt Text',
  name: 'excerptText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
    {
      type: 'customImage',
    },
  ],
};
