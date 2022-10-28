import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { Row, Col } from 'react-bootstrap';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { urlFor } from 'lib/api';

import BlogContent from 'components/BlogContent';

const BlogDetail = ({ blog }) => {
  debugger;
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(500).url()}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export default BlogDetail;
