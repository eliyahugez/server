const mongoose = require('mongoose')
const chalk = require('chalk');

mongoose.connect('mongodb://127.0.0.1:27017/business_card_app')
.then(()=>console.log(chalk.magentaBright("connected to Atlas mongoDB")))
.catch((err)=>console.log(chalk.redBright.bold(`error connecting to Atlas mongoDB${err}`)))