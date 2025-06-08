const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// DB接続設定
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpass',
  database: 'sw25db',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL接続エラー:', err);
    return;
  }
  console.log('MySQLに接続成功');
});

app.get('/api/magic', (req, res) => {
  db.query('SELECT * FROM magic', (err, results) => {
    if (err) {
      res.status(500).send('DBエラー');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`APIサーバー http://localhost:${port} で起動中`);
});
