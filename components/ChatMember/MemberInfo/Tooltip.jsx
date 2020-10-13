import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TooltipAntd } from 'antd';
import css from './Tooltip.sass';

const Tooltip = ({ children, icon }) => (
  <div>
    <TooltipAntd title='Last message' trigger='hover'>
      <TooltipAntd title='Last message' trigger='click'>
        <span className={css.tooltip}>
          {icon && (
            <div className={css.icon}>
              {icon}
            </div>
          )}
          <span className={css.text}>{children}</span>
        </span>
      </TooltipAntd>
    </TooltipAntd>
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.object,
};

Tooltip.defaultProps = {
  icon: undefined,
};

export default Tooltip;
