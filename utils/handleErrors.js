const chalk = require('chalk');

const handleErrors = (res, status, message = "") => {
    console.log(chalk.red.bold(message));
    res.status(status).send(message);
};

module.exports = handleErrors;