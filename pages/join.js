import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import ApplyContent from 'components/AboutContent';

import {
  getHome,
  getJoin,
  getJoinApplication,
  urlFor,
} from 'lib/api';

export default function Join({ join, joinApplication }) {
  const [data] = join;
  const [pdf] = joinApplication;
  return (
    <PageLayout>
      <Col>
        <Row>
          <h1 className={'pl-3 ml-3'}>{data.title}</h1>
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
              style={{ width: '100%' }}
              src={urlFor(data.heroImage)
                .crop('center')
                .fit('clip')
                .url()}
              alt="Card image cap"
            />
          </Col>
          <Col sm={12} md={6} className={'mt-4 mt-md-0'}>
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
    </PageLayout>
  );
}

export async function getStaticProps() {
  const join = await getJoin();
  const joinApplication = await getJoinApplication();
  return {
    props: {
      join,
      joinApplication,
    },
  };
}
