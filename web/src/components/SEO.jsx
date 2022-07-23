import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
}

export default SEO;
