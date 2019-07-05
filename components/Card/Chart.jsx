import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import {
  LineChart, ResponsiveContainer, YAxis, Line,
} from 'recharts';
import { FullWidth } from './FullWidth';
import Changes from '../Typography/Changes';
import css from './Chart.sass';

const getOldNumber = (key, data) => R.pipe(R.nth(-2), R.prop(key))(data);
const getNewNumber = (key, data) => R.pipe(R.nth(-1), R.prop(key))(data);

export const Chart = ({ data, dataKey, ...props }) => {
  const newNumber = getNewNumber(dataKey, data);
  const oldNumber = getOldNumber(dataKey, data);
  const styles = Changes.changeColor(newNumber - oldNumber);

  return (
    <FullWidth className={css.root}>
      <ResponsiveContainer width='100%' height={90}>
        <LineChart
          data={data}
          margin={{
            top: 4,
            left: -4,
            bottom: 4,
            right: -4,
          }}
        >
          <Line
            type='monotone'
            strokeWidth={3}
            dot={false}
            stroke={styles.color}
            dataKey={dataKey}
            isAnimationActive={false}
            {...props}
          />
          <YAxis hide padding={{ top: 0, bottom: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </FullWidth>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataKey: PropTypes.string.isRequired,
};

export default Chart;
