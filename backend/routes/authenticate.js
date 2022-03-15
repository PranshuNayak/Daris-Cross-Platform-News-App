const express = require('express');
const authenticateRouter = express.Router();
const {createNewUser,findUser} = require('../db/Connect')
const bodyParser = require('body-parser');

authenticateRouter.use(bodyParser.json());

authenticateRouter.post('/signup',(req,res)=>{
    createNewUser(req.body);
})

authenticateRouter.post('/signin',async (req,res)=>{
    const result = await findUser(req.body)
    res.send(JSON.stringify(result));
})

module.exports={authenticateRouter};