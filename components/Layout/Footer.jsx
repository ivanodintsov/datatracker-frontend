import React from 'react';
import { addBotUrl } from '../../config';
import { Footer as FooterContainer } from '../Container';
import Logo from '../Logo';

export const Footer = () => (
  <FooterContainer>
    <Logo />
    <span>
      {'powered by '}
      <a href={addBotUrl} target='__blank'>Data Tracker Bot</a>
    </span>
  </FooterContainer>
);

export default Footer;
