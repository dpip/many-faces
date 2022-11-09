import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';

// import { getContact} from 'lib/api';

export default function Contact({ contact }) {
  return (
    <PageLayout>
      <AuthorIntro />
      {/* <FilteringMenu
        filter={filter}
        onChange={(option, value) =>
          setFilter({ ...filter, [option]: value })
        }
      /> */}
      <hr />
    </PageLayout>
  );
}

// export async function getStaticProps() {
//     const blogs = await getContact();
//   return {
//     props: {
//       contact,
//     },
//   };
// }
