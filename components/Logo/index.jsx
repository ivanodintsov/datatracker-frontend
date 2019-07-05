import React from 'react';
import Link from 'next/link';
import css from './index.sass';

const Logo = () => (
  <Link href='/'>
    <a className={css.logo} href='/'>
      Data Tracker
      {/* <sup>beta</sup> */}
    </a>
  </Link>
);

export default Logo;
