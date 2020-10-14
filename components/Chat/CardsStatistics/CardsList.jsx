import React from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import Card from '../../Card';
import Percentage from '../../Typography/Percentage';
import Changes from '../../Typography/Changes';
import { Loader, Failure, withLoading } from '../../Loading';
import { Container } from '../../Container';
import { formatStats } from '../../../utils/getHoursData';

const createStatisticsData = R.pipe(
  R.map(formatStats),
  R.ifElse(
    R.pipe(R.length, R.lt(R.__, 4)),
    R.converge(R.concat, [
      R.pipe(
        R.length,
        R.subtract(4),
        R.times(formatStats),
      ),
      R.identity,
    ]),
    R.identity,
  ),
);

const LoaderComponent = () => (
  <Container fixed border={false}>
    <Loader />
  </Container>
);

const ErrorComponent = () => (
  <Container fixed border={false}>
    <Failure />
  </Container>
);

const CardsList = (props) => {
  const chat = R.pathOr({}, ['data', 'chat'], props);
  const daysStats = R.pathOr([], ['data', 'chatStatistics4days'], props);
  const stats = createStatisticsData(daysStats);
  const lastDayStats = R.last(daysStats);

  return (
    <Card.Container>
      <Card>
        <Card.Header>{R.propOr(0, 'members_count', chat)}</Card.Header>
        <Card.Content extra>
          <Changes number={R.pathOr(0, ['subtract_change', 'members_count'], lastDayStats)} noChanges />
        </Card.Content>
        <Card.Chart data={stats} dataKey='members_count' />
        <Card.Footer>Members</Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          {R.pathOr(0, ['statistics', 'total'], chat)}
        </Card.Header>
        <Card.Content extra>
          <Percentage number={R.pathOr(0, ['percentage_change', 'total'], lastDayStats)} />
        </Card.Content>
        <Card.Chart data={stats} dataKey='total' />
        <Card.Footer>Messages</Card.Footer>
      </Card>
      <div>
        <Card>
          <Card.Header>
            ~
            {R.pathOr(0, ['avg_daily', 'total'], chat)}
          </Card.Header>
          <Card.Footer>Avg. daily messages</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            ~
            {R.pathOr(0, ['avg_hourly', 'total'], chat)}
          </Card.Header>
          <Card.Footer>Avg. messages per hour</Card.Footer>
        </Card>
      </div>
    </Card.Container>
  );
};

CardsList.propTypes = {
  data: PropTypes.shape({
    chat: PropTypes.shape({
      members_count: PropTypes.string,
      statistics: PropTypes.shape({
        total: PropTypes.string,
      }),
      avg_daily: PropTypes.shape({
        total: PropTypes.number,
      }),
      avg_hourly: PropTypes.shape({
        total: PropTypes.number,
      }),
    }),
    chatStatistics4days: PropTypes.arrayOf(PropTypes.shape({
      subtract_change: PropTypes.shape({
        members_count: PropTypes.string,
      }),
      percentage_change: PropTypes.shape({
        total: PropTypes.string,
      }),
    })),
  }).isRequired,
};

export default withLoading({
  LoadingViewComponent: LoaderComponent,
  ErrorViewComponent: ErrorComponent,
}, CardsList);
