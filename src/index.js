const express=require('express')
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.json())

app.listen(4000 ,()=>{console.log("port is runnig on "+ (4000))})