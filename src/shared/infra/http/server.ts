import app from './app';

const port = 3334;
app.listen({ port }, () =>
  console.info('❤ server this my love online...', `http://localhost:${port}/`),
);
