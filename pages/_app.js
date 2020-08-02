import React from 'react';
import PropTypes from 'prop-types';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};
