const bodyParser = require("body-parser")
const port = process.env.PORT || 5000;
const express = require("express")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
      {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '961222',
      'gender': '남자',
      'job': '대학생' 
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '이재석',
        'birthday': '981026',
        'gender': '남자',
        'job': '개발자' 
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',  
        'name': '심청이',
        'birthday': '945021',
        'gender': '여자',
        'job': '회사원' 
      },
  ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));
