import { useState } from 'react';

import { Row, Button, Container } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import FilteringMenu from 'components/FilteringMenu';

import { useGetGalleryPages } from 'actions/pagination';
import { getPaginatedGallery } from 'lib/api';

export default function Gallery({ gallery }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } =
    useGetGalleryPages({ gallery, filter });

  return (
    <PageLayout>
      <Container>
        <div className={'d-flex justify-content-between mt-2'}>
          <h1>Gallery</h1>
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
        {gallery.length > 0 ? (
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
                  ? 'No more art'
                  : 'More art'}
              </Button>
            </div>
          </>
        ) : (
          <Row className={'d-flex justify-content-center pt-4 mt-4'}>
            <h1>Our gallery is coming Soon!</h1>
            <p className={'pt-4 mt-4 pb-4 mb-4'}>
              We recently launched Moffett Craft's website and are
              planning on posting content ASAP. In the meantime{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  'https://www.facebook.com/moffettcraftarts.frameableart/'
                }
              >
                follow on facebook
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
  const gallery = await getPaginatedGallery({
    offset: 0,
    date: 'desc',
  });
  return {
    props: {
      gallery,
    },
    revalidate: 10,
  };
}
