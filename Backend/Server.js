const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./dbConnect');
const router = require('./Router');
const cors=require("cors")
app.use(bodyparser.json());
app.use(cors())
app.use(express.static(`${__dirname}/upload`));

app.use("/TechBlog",router);
const port = 3003;
app.listen(port,function(){
    console.log(`Running on ${port}`);
});