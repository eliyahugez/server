const express = require('express');
const cardRestController = require('../cards/routes/cardRestController');
const errorHandler = require('../utils/errorHandler');
const router = express.Router();


router.use("/cards",cardRestController);

router.use((req,res)=>errorHandler(res,404,"Error Page Not Found in the Global Gateway"))

module.exports = router;

