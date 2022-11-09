const express = require('express') //express모드를 가져온다
const app = express() //function이용 app을 만듬
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://BaekJunWon:112100@baek.vtbpeli.mongodb.net/?retryWrites=true&w=majority',{
    //userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 안쓰면 error가 많이 발생함
}).then(() => console.log('MongoDM Connected....'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))