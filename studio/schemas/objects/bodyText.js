export default {
  title: 'Post Body',
  name: 'bodyText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
      ],
    },
    {
      type: 'customImage',
    },
  ],
};
