import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { baseUrl } from '~/config';

const HeadMeta = ({
  description,
  photo,
  ...rest
}) => {
  const Router = useRouter();
  const url = rest.url || `${baseUrl}${Router.asPath}`;
  const title = rest.title ? `${rest.title} | Data Tracker` : 'Data Tracker';

  return (
    <Head>
      <title>{title}</title>
      <link rel='canonical' href={url} />
      <meta property='og:site_name' content='Data Tracker' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:locale' content='en_EN' />
      <meta name='twitter:site' content='@datatracker_bot' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:card' content='summary' />
      {description && (
        <>
          <meta name='description' content={description} />
          <meta name='twitter:description' content={description} />
          <meta property='og:description' content={description} />
        </>
      )}
      {photo && (
        <>
          <meta property='og:image' content={photo} />
          <meta property='og:image:width' content='640' />
          <meta property='og:image:height' content='640' />
          <meta name='twitter:image' content={photo} />
          <meta property='vk:image' content={photo} />
          <link rel='image_src' href={photo} />
        </>
      )}
    </Head>
  );
};

HeadMeta.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

HeadMeta.defaultProps = {
  photo: undefined,
};

export default HeadMeta;
