import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import AboutContent from 'components/AboutContent';

import { getAbout, urlFor } from 'lib/api';

export default function About({ about }) {
  const [data] = about;
  return (
    <PageLayout>
      <h1>{data.title}</h1>
      <Container className={'mt-5 mb-4'}>
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
        </Row>
      </Container>
      {data.content && <AboutContent content={data.content} />}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const about = await getAbout();
  return {
    props: {
      about,
    },
  };
}
