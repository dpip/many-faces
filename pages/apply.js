import { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import ApplyContent from 'components/AboutContent';

import { getApply, urlFor } from 'lib/api';

export default function About({ apply }) {
  const [data] = apply;
  console.log('about data', data);
  return (
    <PageLayout>
      <h1>{data.title}</h1>
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
        </Row>
      </Container>
      {data.content && <ApplyContent content={data.content} />}
      <hr />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const apply = await getApply();
  return {
    props: {
      apply,
    },
  };
}
