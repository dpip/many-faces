import { useState } from 'react';

import { Row, Button, Container, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

import comingSoonImg from '../assets/images/footer.png';

export default function Blog({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } =
    useGetBlogsPages({ blogs, filter });

  return (
    <PageLayout>
      <Container>
        <div className={'d-flex justify-content-between mt-2'}>
          <h1>Blog Catalog</h1>
          <div
            className={
              'd-flex justify-content-center align-items-center mt-2 ml-4'
            }
          >
            <FilteringMenu
              filter={filter}
              onChange={(option, value) =>
                setFilter({ ...filter, [option]: value })
              }
            />
          </div>
        </div>
        {blogs.length > 0 ? (
          <>
            <Row className="mb-5 mt-5">{pages}</Row>
            <div style={{ textAlign: 'center' }}>
              <Button
                onClick={loadMore}
                disabled={isReachingEnd || isLoadingMore}
                size="lg"
                variant="outline-secondary"
              >
                {isLoadingMore
                  ? '...'
                  : isReachingEnd
                  ? 'No more blogs'
                  : 'More Blogs'}
              </Button>
            </div>
          </>
        ) : (
          <Row className={'d-flex justify-content-center pt-4 mt-4'}>
            <h1>Blogs are coming Soon!</h1>
            <p className={'pt-4 mt-4 pb-4 mb-4'}>
              We recently launched manyfacesinitiative.com and are
              planning on posting content ASAP. In the meantime{' '}
              <a target="_blank" rel="noopener noreferrer" href={''}>
                follow us on facebook
              </a>{' '}
              or check out our{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  'https://www.facebook.com/MyPBSNC/videos/3403972159821678'
                }
              >
                most recent feature on PBS' ncImpact
              </a>
              .
            </p>
          </Row>
        )}
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
}
