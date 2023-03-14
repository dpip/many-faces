import { Container, Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AboutContent from 'components/AboutContent';

import { getAbout, urlFor } from 'lib/api';

export default function About({ about }) {
  const [data] = about;
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
            md={12}
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
            md={12}
            className={'mt-4 ml-3 mr-3 ml-0 mr-0 pl-0 pr-0'}
          >
            {data.content && <AboutContent content={data.content} />}
          </Col>
        </Row>
      </Container>
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
