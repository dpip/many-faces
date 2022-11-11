import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';

// import { getContact} from 'lib/api';

export default function Apply({ apply }) {
  return (
    <PageLayout>
      <h1>Apply</h1>
      <hr />
    </PageLayout>
  );
}

// export async function getStaticProps() {
//     const blogs = await getContact();
//   return {
//     props: {
//       apply,
//     },
//   };
// }
