import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageLayout from 'components/PageLayout';

import { getHome, getApplication, urlFor } from 'lib/api';

export default function Home({ home, application }) {
  const [data] = home;
  const [apply] = application;
  // console.log('home data', data, apply);
  return (
    <PageLayout>
      <Container>
        <Row>
          <Col className={'d-flex justify-content-center'}>
            <img
              src={urlFor(data.heroImage)
                .height(400)
                .crop('center')
                .fit('clip')
                .url()}
              alt="Card image cap"
            />
          </Col>
          <Col>
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
        <Row>
          <Col className={'text-center pt-2'}>
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
          <Col className={'text-center pt-2'}>
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
          <Col className={'text-center pt-2'}>
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
          <Col
            className={
              'text-center pt-2 d-flex justify-content-center mt-3'
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
              <a
                href={`${apply.application}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline-secondary">
                  Apply
                </Button>
              </a>
            </div>
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
              <Col key={index} className={'text-center pt-2'}>
                <img
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
      {/* <AuthorIntro /> */}
      <hr />
      {/* will recomment a blog row for the main page */}
      {/* <Row className="mb-5">{pages}</Row> */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const home = await getHome();
  const application = await getApplication();
  return {
    props: {
      home,
      application,
    },
  };
}
