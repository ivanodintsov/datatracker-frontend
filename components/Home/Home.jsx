import React from 'react';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';
import { Container, Content } from '../Container';
import { addBotUrl } from '../../config';
import css from './Home.sass';

export const Home = () => (
  <Content className={css.root}>
    <Container>
      <Typography.Title>
        Just a chat activity bot
      </Typography.Title>
      <Typography.Paragraph>
        <p>
          Look at your community through a new lens
        </p>
      </Typography.Paragraph>
      <Button shape='round' type='primary' href={addBotUrl} target='__blank'>Get Started</Button>
    </Container>
  </Content>
);

export default Home;
