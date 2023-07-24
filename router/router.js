const express = require('express');
const router = express.Router();
const cardsRestController = require('../cards/routes/cardsRestConteroller');
const handleErrors = require('../utils/handleErrors');

router.use('/cards', cardsRestController);

router.use((req, res) => handleErrors(res, 404, 'Page Not Found generally! 🤷‍♂️'));


module.exports = router;