const bodyParser = require("body-parser")
const fs = require("fs");
const port = process.env.PORT || 5000;
const express = require("express")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM customer",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));
