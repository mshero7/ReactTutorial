const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// 이 경로로 들어오면 세명의 정보 데이터를 담고있음
app.get('/api/customers',(req,res)=> {
    res.send([
        [
            {
              'id' : 1,
              'image' : 'https://placeimg.com/64/64/1',
              'name' : '문상수1',
              'birthday' : '961222',    
              'gender' : '남자',
              'job' : '대학생'
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '문상수2',
              'birthday' : '961222',
              'gender' : '남자',
              'job' : '대학생'
            },
            {
              'id' : 3,
              'image' : 'https://placeimg.com/64/64/3',
              'name' : '문상수3',
              'birthday' : '961222',
              'gender' : '남자',
              'job' : '대학생'
            }
          ]
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));