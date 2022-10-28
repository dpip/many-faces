
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    image: ({node: {asset, alt}}) => {
      return (
        <div className="blog-image">
          <img src={urlFor(asset).height(300).fit('max').url()} />
          <div className="image-alt">{alt}</div>
        </div>
      )
    }
  },
};

const BlogContent = ({content}) => {
    return (
        <BlockContent
            blocks={content}
            serializers={serializers}
        />
    )
}

export default BlogContent