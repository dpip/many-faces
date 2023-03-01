import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } =
    useGetBlogsPages({ blogs, filter });

  return (
    <PageLayout>
      <AuthorIntro />
      {/* <FilteringMenu
        filter={filter}
        onChange={(option, value) =>
          setFilter({ ...filter, [option]: value })
        }
      /> */}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
    },
  };
}
