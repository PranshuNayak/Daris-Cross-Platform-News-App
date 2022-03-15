const express = require('express');
const bodyParser = require('body-parser');
const {connectToDb} = require('./db/Connect')
const {authenticateRouter} = require('./routes/authenticate')
connectToDb();

const app = express();

//middlewares
app.use('/authenticate',authenticateRouter);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('home');
    res.send(`<h1>Home</h1>`);
})


app.listen(5000,()=>{console.log('Server listening...')})