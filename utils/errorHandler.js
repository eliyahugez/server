const chalk = require('chalk');

const errorHandler = (res , status , massage = "") => {
console.log(chalk.redBright(massage));
res.status(status).send(massage)
}

module.exports = errorHandler;