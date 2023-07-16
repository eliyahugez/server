const chalk = require('chalk');
const express = require('express');
const { errorHandler } = require('./utils/errorHandler');
const app = express()
const port = 8080;
const router = require('./router/router');
app.use(express.static('./public'))

app.use(router)
    
    
  


app.listen(port, () => console.log(chalk.blue.bold(`Example app listening on port ${port}!`)));