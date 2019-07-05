import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';
import FixMinHeight from '../FixMinHeight';
import css from './Layout.sass';
// import AddBotButton from '../Buttons/AddBotButton';

export const Layout = ({ children, footer }) => (
  <FixMinHeight className={css.root}>
    <Header />
    <div className={css.content}>
      {children}
    </div>
    {/* <AddBotButton /> */}
    {footer && <Footer />}
  </FixMinHeight>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
};

Layout.defaultProps = {
  footer: true,
};

export default Layout;
