import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'antd/es/typography';
import HoursChart from './HoursChart';

const { Title } = Typography;

export class HoursActivity extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    range: PropTypes.shape({}).isRequired,
    error: PropTypes.shape({}),
  };

  static defaultProps = {
    data: undefined,
    error: undefined,
  }

  render() {
    const {
      loading, error, data, range,
    } = this.props;

    return (
      <React.Fragment>
        <Title level={2}>Active hours</Title>
        <HoursChart loading={loading} error={error} data={{ data, range }} />
      </React.Fragment>
    );
  }
}

export default HoursActivity;
