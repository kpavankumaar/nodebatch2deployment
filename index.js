var express = require('express');
const mongoose = require('mongoose');
const middleware = require('./middleware');
const config = require('./config')
const PORT = process.env.PORT || 3000;
var app = express();

var bodyParser = require('body-parser');
// var defaultCtrl = require('./controllers/default.ctrl');
// var productCtrl = require('./controllers/product.ctrl');
var defaultRouter = require('./routes/default.router');
var productRouter = require('./routes/product.router');
var userRouter = require('./routes/user.router');
var reviewRouter = require('./routes/review.router');
mongoose.connect(config.conStr,{dbName:'nbitsnodebatch2products'} ,(err)=>{
    console.log('db err message',err);
})

app.use(bodyParser.json());
app.use('/',defaultRouter);

// middleware 


// app.use(middleware.tokenAuth);
app.use('/api/reviews',reviewRouter);
app.use('/api/products',productRouter);
app.use('/api/users', userRouter);
// app.get('/',defaultCtrl.get);
// app.get('/products',productCtrl.get);


app.listen(PORT,function(){
    console.log('we are listening to port 3000');
})
