const bodyParser = require("body-parser")
const port = process.env.PORT || 5000;
const express = require("express")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
