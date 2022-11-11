import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import AboutContent from 'components/AboutContent';

import { getAbout } from 'lib/api';

export default function About({ about }) {
  const [data] = about;
  console.log('about data', data);
  return (
    <PageLayout>
      <h1>{data.title}</h1>
      {data.content && <AboutContent content={data.content} />}
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
