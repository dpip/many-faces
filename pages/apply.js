import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import ApplyContent from 'components/AboutContent';

import {
  getHome,
  getApply,
  getApplication,
  getContact,
  urlFor,
} from 'lib/api';

export default function About({ apply, application, contact }) {
  const [data] = apply;
  const [pdf] = application;
  const [email] = contact;
  return (
    <PageLayout>
      <Col>
        <Row>
          <h1 className={'pl-3'}>{data.title}</h1>
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
          <Col
            sm={12}
            md={6}
            className={'mt-4 mt-md-0 ml-3 mr-3 ml-md-0 mr-md-0'}
          >
            <Row>
              {data.content && (
                <ApplyContent content={data.content} />
              )}
              <div className={'d-flex'}>
                <span>
                  Interested? Download an application and send a
                  completed copy over to{' '}
                  <a
                    href={`${email.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email.emailTitle}
                  </a>
                  .
                </span>
              </div>
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
                      Download
                    </Button>
                  </a>
                </div>
                <div
                  className={'ml-3'}
                  style={{ textAlign: 'center' }}
                >
                  <a
                    href={`mailto:${email.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline-secondary">
                      Send
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
  const apply = await getApply();
  const application = await getApplication();
  const contact = await getContact();
  return {
    props: {
      apply,
      application,
      contact,
    },
    revalidate: 10,
  };
}
