import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip as TooltipAntd } from 'antd';
import css from './Tooltip.sass';

const Tooltip = ({ children, icon }) => (
  <div>
    <TooltipAntd title='Last message' trigger='hover'>
      <TooltipAntd title='Last message' trigger='click'>
        <span className={css.tooltip}>
          {icon && (<FontAwesomeIcon icon={icon} className={css.icon} />)}
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
