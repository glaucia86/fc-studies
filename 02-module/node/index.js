const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Glaucia Lemos')`;
connection.query(sql);
connection.end();

app.get('/', (_req, res) => {
  res.send('<h1>Olá, Developers!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
