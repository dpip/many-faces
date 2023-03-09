import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import AboutContent from 'components/AboutContent';

import { getAbout, urlFor } from 'lib/api';

export default function About({ about }) {
  const [data] = about;
  console.log('about data', data);
  return (
    <PageLayout>
      <Container className={'mt-2 mb-4 ml-1 mr-1'}>
        <h1 className={'pb-4 mb-4'}>{data.title}</h1>
        <Row>
          <Col
            sm={12}
            md={12}
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
          <Col className={'pt-4 mt-3'}>
            {data.content && <AboutContent content={data.content} />}
          </Col>
        </Row>
      </Container>
      <hr />
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
