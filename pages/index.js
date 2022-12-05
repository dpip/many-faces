import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageLayout from 'components/PageLayout';
import Link from 'next/link';

import {
  getHome,
  getApplication,
  urlFor,
  getPaginatedBlogs,
} from 'lib/api';

import { useGetBlogsPages } from 'actions/pagination';

export default function Home({ home, application, blogs }) {
  const [data] = home;
  const [apply] = application;
  const [testimonials] = blogs;
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
          <Col
            className={'d-flex justify-content-center'}
            sm={12}
            md={6}
          >
            <img
              src={urlFor(data.heroImage)
                .height(400)
                .crop('center')
                .fit('clip')
                .url()}
              alt="Card image cap"
            />
          </Col>
          <Col className={'mt-5 mt-md-0'} sm={12} md={6}>
            <span>{data.ctaSnippets}</span>
            <h1 className={'bold'}>{data.title}</h1>
            <p>{data.subtitle}</p>
            <Row>
              <Col
                className={
                  'text-center pt-2 d-flex justify-content-start'
                }
              >
                <div
                  style={{ textAlign: 'center', marginRight: '1rem' }}
                >
                  <Link href="/donate">
                    <Button size="lg" variant="outline-primary">
                      Donate
                    </Button>
                  </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/apply">
                    <Button size="lg" variant="outline-secondary">
                      Apply
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={'mt-5'}>
        <Row>
          <Col className={'text-center pt-2'}>
            <h1>{data.aboutTitle}</h1>
          </Col>
        </Row>
        <Row>
          <Col className={'text-center pt-2'}>
            <p>{data.aboutDescription}</p>
          </Col>
        </Row>
        <Row className="mb-5">{pages}</Row>
        <Row>
          <Col className={'text-center pt-2'} xs={12} sm={4}>
            <div>
              <FontAwesomeIcon
                className="mb-3 mt-5"
                size="4x"
                icon={'user'}
              />
            </div>
            Applicants apply Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut.
          </Col>
          <Col className={'text-center pt-2'} xs={12} sm={4}>
            <div>
              <FontAwesomeIcon
                className="mb-3 mt-5"
                size="4x"
                icon={'gift'}
              />
            </div>
            Selected applicants recieve a paid 10 week internship with
            one of the fine breweries that are vetted by Many Faces.
          </Col>
          <Col className={'text-center pt-2'} xs={12} sm={4}>
            <div>
              <FontAwesomeIcon
                className="mb-3 mt-5"
                size="4x"
                icon={'graduation-cap'}
              />
            </div>
            Learn alongside the industry's best and make invaluable
            connections.
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className={'text-center pt-2 mt-5'}>
            <h2>{data.donorsTitle}</h2>
          </Col>
        </Row>
      </Container>
      <Container className={'mt-3 mb-5'}>
        <Row>
          {data.donorImages.map((image, index) => {
            return (
              <Col
                key={index}
                className={'text-center mt-md-5 pt-2'}
                xs={12}
                sm={4}
              >
                <img
                  className={'text-center mt-4'}
                  src={urlFor(image)
                    .height(100)
                    .crop('center')
                    .fit('clip')
                    .url()}
                  alt="Card image cap"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            className={
              'text-center pt-2 d-flex justify-content-center mt-3'
            }
          >
            <div style={{ textAlign: 'center', marginRight: '1rem' }}>
              <Link href="/donate">
                <Button size="lg" variant="outline-primary">
                  Donate
                </Button>
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/apply">
                <Button size="lg" variant="outline-secondary">
                  Apply
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      {/* will recomment a blog row for the main page */}
      {/* <Row className="mb-5">{pages}</Row> */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const home = await getHome();
  const application = await getApplication();
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      home,
      application,
      blogs,
    },
  };
}
