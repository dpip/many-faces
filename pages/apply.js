import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import ApplyContent from 'components/AboutContent';

import { getHome, getApply, getApplication, urlFor } from 'lib/api';

export default function About({ apply, application }) {
  const [data] = apply;
  const [pdf] = application;
  console.log('about data', data);
  return (
    <PageLayout>
      <Col>
        <Row>
          <h1 className={'pl-3 ml-3'}>{data.title}</h1>
        </Row>
      </Col>
      <Container className={'mt-5 mb-5'}>
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
            <Row>
              {data.content && (
                <ApplyContent content={data.content} />
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
                    href={`${pdf.application}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline-primary">
                      Download Application
                    </Button>
                  </a>
                </div>
                <div
                  className={'ml-3'}
                  style={{ textAlign: 'center' }}
                >
                  <a
                    href={'mailto:brian@townbrewing.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline-secondary">
                      Send Application
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const apply = await getApply();
  const application = await getApplication();
  return {
    props: {
      apply,
      application,
    },
  };
}
