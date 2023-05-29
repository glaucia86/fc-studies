const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('<h1>Olá, Developers!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
