import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { Container } from '../../Container';
import CardsList from './CardsList';

const { Title } = Typography;

export class CardsStatistics extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({}),
    error: PropTypes.shape({}),
  };

  static defaultProps = {
    data: undefined,
    error: undefined,
  }

  render() {
    const {
      loading, error, ...props
    } = this.props;

    return (
      <React.Fragment>
        <Container fixed padding={false}>
          <Title level={2}>Statistics</Title>
        </Container>
        <Container background>
          <CardsList loading={loading} error={error} data={props} />
        </Container>
      </React.Fragment>
    );
  }
}

export default CardsStatistics;
