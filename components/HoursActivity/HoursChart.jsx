import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer,
} from 'recharts';
import Range from '../Range';
import colors from '../../styles/colors.sass';
import { mobile } from '../../styles/vars.sass';
import kFormatNumber from '../../utils/kFormatNumber';
import { withLoading } from '../Loading';

const HoursChats = ({ data, range }) => (
  <React.Fragment>
    <ResponsiveContainer width='100%' height={240}>
      <LineChart data={data} margin={{}}>
        <defs>
          <linearGradient id='pupleChart' x1='0%' y1='0%' x2='10%' y2='100%'>
            <stop offset='0%' stopColor='#764ba2' />
            <stop offset='100%' stopColor='#667eea' />
          </linearGradient>
        </defs>
        <YAxis
          // hide
          tick={{ fill: colors.black2, fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          mirror
          dataKey='total'
          tickFormatter={kFormatNumber.format}
          tickMargin={0}
          padding={{ bottom: 50, top: 10 }}
        />
        <XAxis
          tick={{ fill: colors.black2, fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          mirror
          dataKey='hour'
          tickMargin={5}
          padding={{ left: 36, right: 10 }}
          interval={(process.browser && window.innerWidth) > parseInt(mobile, 10) ? 0 : 'preserveStart'}
        />
        <Line
          isAnimationActive={false}
          type='monotone'
          dataKey='total'
          stroke='url(#pupleChart)'
          strokeWidth={4}
          dot={{ r: 4, strokeWidth: 3 }}
          // activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
    <Range range={range} />
  </React.Fragment>
);

HoursChats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  range: PropTypes.shape({}).isRequired,
};

export default withLoading({}, HoursChats);
