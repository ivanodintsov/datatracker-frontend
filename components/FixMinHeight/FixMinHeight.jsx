import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './FixMinHeight.sass';

export class FixMinHeight extends Component {
  static getWindowHeight() {
    return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
  }

  constructor(props) {
    super(props);

    this.fullHeight = React.createRef();
    this.changeHeight = this.changeHeight.bind(this);
  }

  componentDidMount() {
    this.changeHeight();
    window.addEventListener('resize', this.changeHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeHeight);
  }

  changeHeight() {
    const height = this.constructor.getWindowHeight();
    this.fullHeight.current.style.minHeight = `${height}px`;
  }

  render() {
    const { children, className, ...props } = this.props;

    return (
      <div ref={this.fullHeight} className={cx(css.root, className)} {...props}>
        {children}
      </div>
    );
  }
}

FixMinHeight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FixMinHeight.defaultProps = {
  className: '',
};

export default FixMinHeight;
