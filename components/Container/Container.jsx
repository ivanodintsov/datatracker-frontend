import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import css from './Container.sass';
import HorizontalScrollBase from '../HorizontalScroll';

const cx = classnames.bind(css);

export const Header = ({ children }) => (
  <header className={css.header}>
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Container = ({
  as: Component,
  children, className,
  fixed, background,
  padding,
  border,
  ...props
}) => (
  <Component
    className={
      cx(css.container, className, {
        fixed,
        background,
        noPadding: !padding,
        border: !border,
      })
    }
    {...props}
  >
    {children}
  </Component>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  padding: PropTypes.bool,
  background: PropTypes.bool,
  border: PropTypes.bool,
};

Container.defaultProps = {
  as: 'div',
  className: '',
  fixed: false,
  background: false,
  padding: true,
  border: true,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FullWidth = ({ children, className }) => (
  <div className={cx(className, css.fullWidth)}>
    {children}
  </div>
);

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FullWidth.defaultProps = {
  className: '',
};

export const HorizontalScroll = ({ children, className }) => (
  <HorizontalScrollBase className={cx(className, css.fullWidth)} innerClassName={css.padding}>
    {children}
  </HorizontalScrollBase>
);

HorizontalScroll.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

HorizontalScroll.defaultProps = {
  className: '',
};

export const Footer = ({ children }) => (
  <footer className={css.footer}>
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Content = ({ children, className }) => (
  <section className={cx(css.content, className)}>
    {children}
  </section>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Content.defaultProps = {
  className: '',
};
