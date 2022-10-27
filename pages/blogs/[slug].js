import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

const BlogDetail = () => {
  const { query } = useRouter();
  return (
    <PageLayout>
      <h1>Detail Page - {query?.slug}</h1>
    </PageLayout>
  );
};

export default BlogDetail;
