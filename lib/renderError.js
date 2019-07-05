const renderError = (fn, options, props) => (renderData) => {
  const { error } = renderData;
  const { redirect } = options;

  if (error) {
    redirect({}, '/404');
  }

  return fn({ ...props, ...renderData });
};

export default renderError;
