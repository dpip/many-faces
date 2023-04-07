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

export const useGetGallery = ({ offset, filter }, initialData) => {
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
