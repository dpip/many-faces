// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export const useGetHello = () => useSWR('/api/hello', fetcher);

// // initial course function update from course below comment
// // export const useGetBlogs = () => {
// //   return useSWR(`/api/blogs`, fetcher);
// // };

// export const useGetBlogs = ({ offset }, initialData) => {
//   return useSWR(`../api/blogs?offset${offset || 0}`, fetcher, {
//     fallbackData: initialData,
//   });
// };

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetHome = (initialData) => {
  return useSWR(`/api/home`, fetcher, {
    initialData,
  });
};

export const useGetBlogs = ({ offset, filter }, initialData) => {
  return useSWR(
    `/api/blogs?offset=${offset || 0}&date=${
      filter.date.asc ? 'asc' : 'desc'
    }`,
    fetcher,
    {
      initialData,
    }
  );
};
