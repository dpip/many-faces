import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';

// import { getContact} from 'lib/api';

export default function Donate({ donate }) {
  return (
    <PageLayout>
      <h1>Donate</h1>

      <hr />
    </PageLayout>
  );
}

// export async function getStaticProps() {
//     const blogs = await getContact();
//   return {
//     props: {
//       donate,
//     },
//   };
// }
