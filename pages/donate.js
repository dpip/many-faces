import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import DonateContent from 'components/AboutContent';

import { getDonate, urlFor } from 'lib/api';

export default function About({ donate }) {
  const [data] = donate;
  return (
    <PageLayout>
      <Col>
        <Row>
          <h1 className={'pb-2 pl-3 ml-3'}>{data.title}</h1>
        </Row>
      </Col>
      <Container className={'mt-5 mb-5'}>
        <Row>
          <Col
            sm={12}
            md={6}
            className={'d-flex justify-content-center'}
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
          <Col sm={12} md={6} className={'mt-4 mt-md-0'}>
            <Row>
              {data.content && (
                <DonateContent content={data.content} />
              )}
            </Row>
            <Row>
              <Col
                className={
                  'text-center pt-2 pb-2 pl-0 ml-0 d-flex mt-3'
                }
              >
                <div style={{ textAlign: 'center' }}>
                  <a
                    href={`${data.donateUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline-primary">
                      Make a Donation
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const donate = await getDonate();
  return {
    props: {
      donate,
    },
  };
}
