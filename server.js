const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/chats/:chatId', (req, res) => app.render(
    req, res, '/Chat',
    {
      chatId: req.params.chatId,
    },
  ));

  server.get('/chats/:chatId/members/:memberId', (req, res) => app.render(
    req, res, '/ChatMember',
    {
      chatId: req.params.chatId,
      memberId: req.params.memberId,
      username: req.query.username,
    },
  ));

  server.get('*', handle);

  server.listen(port, '0.0.0.0', (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
