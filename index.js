const express = require('express') //express모드를 가져온다
const app = express() //function이용 app을 만듬
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const {User} = require("./models/User");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    //userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 안쓰면 error가 많이 발생함
}).then(() => console.log('MongoDM Connected....'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다

    const user = new User(req.body) //클라이언트 정보를 받아준다(body-parser)
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })//status(200)은 성공했다는 의미
    })//mongoDB에서 온 데이터

})

app.listen(port, () => console.log(`Example app listening on port ${port}`))