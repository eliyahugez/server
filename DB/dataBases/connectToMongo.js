const mongoose = require('mongoose')
const chalk = require('chalk');

mongoose
//.connect('mongodb://127.0.0.1:27017/business_card_app')
.connect('mongodb://127.0.0.1:27017/mongoose-sandbox')
.then(()=>console.log(chalk.magentaBright("connected to local mongoDB")))
.catch((err)=>console.log(chalk.redBright.bold(`error connecting to local mongoDB${err}`)))