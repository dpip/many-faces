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
      <Container className={'mt-4'}>
        <Row>
          <Col
            className={'d-flex justify-content-center'}
            sm={12}
            md={6}
          >
            <img
              style={{ objectFit: 'contain' }}
              src={urlFor(data.heroImage)
                .height(320)
                .crop('center')
                .fit('clip')
                .url()}
              alt="Card image cap"
            />
          </Col>
          <Col className={'mt-3'} sm={12} md={6}>
            <span
              className={'mt-5 text-uppercase'}
              style={{ letterSpacing: '0.08em' }}
            >
              {data.ctaSnippets}
            </span>
            <h1
              className={'mt-3'}
              style={{ fontWeight: '800', fontSize: '48px' }}
            >
              {data.title}
            </h1>
            <p className={'mt-3'}>{data.subtitle}</p>
            <Row>
              <Col
                className={
                  'text-center pt-2 d-flex justify-content-start mt-3'
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
      {/* ABOUT SECTION */}
      <Container className={'pt-5 mt-5'}>
        <Row>
          <Col className={'text-center pt-2'}>
            <h1>{data.aboutTitle}</h1>
          </Col>
        </Row>
        <Row>
          <Col className={'text-center pt-4'}>
            <p>{data.aboutDescription}</p>
          </Col>
        </Row>
        <Container className={'pt-4 pb-3'}>
          <Row>
            <Col className={'text-center'}>
              <div style={{ textAlign: 'center' }}>
                <Link href="/about">
                  <Button size="lg" variant="outline-secondary">
                    More about the initiative
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        {/* DONORS SECTION */}
        <Container>
          <Row>
            <Col className={'text-center pt-2 mt-5'}>
              <h4>{data.donorsTitle}</h4>
            </Col>
          </Row>
        </Container>
        <Container className={'mt-3 mb-5'}>
          <Row className={'partners-container'}>
            {data.donorImages.map((image, index) => {
              return (
                <Col
                  key={index}
                  className={'text-center mt-md-4 partners-logo'}
                  // xs={12}
                  // sm={4}
                  // md={4}
                  // lg={4}
                >
                  <img
                    className={'text-center'}
                    src={urlFor(image)
                      .height(75)
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
        {/* <Container className={'pt-2 pb-4 mb-4'}>
          <Row>
            <Col className={'text-center'}>
              <div style={{ textAlign: 'center' }}>
                <Link href="/join">
                  <Button size="lg" variant="outline-secondary">
                    Join the initiative
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container> */}
        {/* <Row className={'mb-2'}>
          <Col className={'text-center pt-2'} xs={12} sm={4}>
            <div>
              <FontAwesomeIcon
                className="mb-3 mt-5 orange"
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
                className="mb-3 mt-5 red"
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
                className="mb-3 mt-5 teal"
                size="4x"
                icon={'graduation-cap'}
              />
            </div>
            Learn alongside the industry's best and make invaluable
            connections.
          </Col>
        </Row> */}
        {/* <Row
          className={'text-center justify-content-center pt-4 pb-5'}
        >
          <h3 className={'text-center'}>
            What interns think about the program
          </h3>
        </Row>
        <Row className="mb-5">{pages}</Row> */}
      </Container>
      {/* <Container>
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
      </Container> */}
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
