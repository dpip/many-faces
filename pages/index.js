import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } =
    useGetBlogsPages({ blogs, filter });

  return (
    <PageLayout>
      <Container>
        <Row>
          <Col>Many Faces logo</Col>
          <Col>
            <h1 className={'bold'}>Many Faces Initiative</h1>
            <p>
              The Many Faces Initiative deliveres a paid, ten-week
              brewery internship program designed to provide
              opportunities to all faces in the brewing industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={'text-center pt-2'}>
            <h2>
              Industry-leading donors pushing boundaries with Many
              Faces
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={'text-center pt-2'}>
            TODO : Donor logos container
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={'text-center pt-2'}>
            <h1>(About) How the program works</h1>
          </Col>
        </Row>
        <Row>
          <Col className={'text-center pt-2'}>
            Applicants apply Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut.
          </Col>
          <Col className={'text-center pt-2'}>
            Selected applicants recieve a paid 10 week internship with
            one of the fine breweries that are vetted by Many Faces.
          </Col>
          <Col className={'text-center pt-2'}>
            Learn alongside the industry's best and make invaluable
            connections.
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            className={
              'text-center pt-2 d-flex justify-content-center'
            }
          >
            <div style={{ textAlign: 'center', marginRight: '1rem' }}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://buy.stripe.com/test_bIYcOh3IjdIu2KQcMM',
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                size="lg"
                variant="outline-primary"
              >
                Donate
              </Button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                // onClick={}
                size="lg"
                variant="outline-secondary"
              >
                Apply
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <AuthorIntro /> */}
      <hr />
      {/* will recomment a blog row for the main page */}
      {/* <Row className="mb-5">{pages}</Row> */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
    },
  };
}
