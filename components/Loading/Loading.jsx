import React from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import css from './Loading.sass';

export const Loader = () => <div className={css.loading} />;
export const Failure = () => 'Error loading data.';

export const withLoading = R.curry((
  { LoadingViewComponent = Loader, ErrorViewComponent = Failure } = {},
  Component,
) => {
  const Wrapper = ({ loading, error, data }) => {
    if (loading) {
      return <LoadingViewComponent />;
    }

    if (error) {
      return <ErrorViewComponent />;
    }

    return (
      <Component {...data} />
    );
  };

  Wrapper.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({}),
    error: PropTypes.bool,
  };

  Wrapper.defaultProps = {
    data: undefined,
    error: undefined,
  };

  return Wrapper;
});

const Loading = ({
  loading,
  error,
  children,
  loaderRender: LoaderComponent,
  errorRender: FailureComponent,
}) => {
  if (loading) {
    return (
      <LoaderComponent />
    );
  }

  if (error) {
    return <FailureComponent />;
  }

  return children;
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  loaderRender: PropTypes.element,
  errorRender: PropTypes.element,
};

Loading.defaultProps = {
  loading: false,
  error: false,
  loaderRender: Loader,
  errorRender: Failure,
};

export default Loading;
