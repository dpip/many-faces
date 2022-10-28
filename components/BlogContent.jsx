
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: () => {
      return <h1>code block goes here</h1>;
    },
  },
};

const BlogContent = ({content}) => {
    return (
        <BlockContent
            blocks={content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
        />
    )
}

export default BlogContent