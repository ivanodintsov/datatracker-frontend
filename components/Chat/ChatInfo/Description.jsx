import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'antd/es/typography';
import { withLoading } from '../../Loading';

const { Text } = Typography;

const Description = ({ description }) => description && (
  <Text>{description}</Text>
);

Description.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default withLoading({}, Description);
