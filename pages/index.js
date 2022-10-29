import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
        filter={filter}
      />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="10">
              <CardListItem />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                author={blog.author}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  );
};

export default Home;

// The getStaticProps function is called during the build (build time)
// Provides props to the page
// Creates static page content
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
