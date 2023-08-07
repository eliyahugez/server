const express = require('express');
const app = express();
const chalk = require('chalk');
const router = require('./router/router');
const handleErrors = require('./utils/handleErrors');
const cors = require('./cors/cors');
const morgan = require('morgan');
const connectToDB = require('./DB/DbServise');

// app.use(morgan(
//     chalk.cyanBright("[:date[clf]] :method :url :status :response-time ms")
// ));
app.use(morgan((tokens, req, res) => {
    const method = tokens.method(req, res);
    const url = tokens.url(req, res);
    const status = tokens.status(req, res);
    const dash = "-";
    const responseTime = tokens['response-time'](req, res);
    const ms = "ms";
    // return `${method} ${url} ${status} ${dash} ${responseTime} ${ms}`
    const arr = [method, url, status, dash, responseTime, ms];
    return arr.join(" ");
}))

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}));

app.use(express.json());
app.use(express.text());
app.use(express.static('./public'));

app.use(router);

router.use((error, req, res, next) => {
    handleErrors(res, 500, error.message);
});

const PORT = 8181; // 0-65535
app.listen(PORT, () => {
    console.log(chalk.blue.bold(`Server is listening on port ${PORT}`));
    connectToDB();
});


