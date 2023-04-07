import { useEffect } from 'react';

import { useSWRPages } from 'swr';
import { useGetGallery } from 'actions';
import { Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import CardItemBlank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

export const useGetGalleryPages = ({ gallery, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      let initialData = !offset && gallery;

      if (
        typeof window !== 'undefined' &&
        window.__pagination__init
      ) {
        initialData = null;
      }

      const { data: paginatedGallery } = withSWR(
        useGetGallery({ offset, filter }, initialData)
      );

      if (!paginatedGallery) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            filter.view.list ? (
              <Col key={i} md="9">
                <CardListItemBlank />
              </Col>
            ) : (
              <Col key={`${i}-item`} md="4">
                <CardItemBlank />
              </Col>
            )
          );
      }
      return paginatedGallery.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md="9">
            <CardListItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LL')}
              link={{
                href: '/gallery/[slug]',
                as: `/gallery/${blog.slug}`,
              }}
            />
          </Col>
        ) : (
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LL')}
              image={blog.coverImage}
              link={{
                href: '/gallery/[slug]',
                as: `/gallery/${blog.slug}`,
              }}
            />
          </Col>
        )
      );
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 6;
    },
    [filter]
  );
};
