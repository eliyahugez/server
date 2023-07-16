const express = require('express');
const errorHandler = require('../../utils/errorHandler');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("in cards get");
});
router.get('/:id', (req, res) => {
    const id = 1234;
    const urlId = parseInt(req.params.id);
    if (id === urlId ) {
        console.log("in id card get params");
        res.send("in id card get params")  
    }
});

router.post('/', (req, res)=>{
    console.log("in cards post");
})

router.put('/:id', (req, res)=>{
    const id = 1234;
    const urlId = parseInt(req.params.id);
    if (id === urlId ) {
        console.log("in id card put params");
        res.send("in id card put params")  
    }
})

router.patch('/:id',(req,res) => {
    const id = 1234;
    const urlId = parseInt(req.params.id);
    if (id === urlId ) {
        console.log("in id card patch params");
        res.send("in id card patch params")  
    }
})
router.delete('/:id',(req,res) => {
    const id = 1234;
    const urlId = parseInt(req.params.id);
    if (id === urlId ) {
        console.log("in id card delete params");
        res.send("in id card delete params")  
    }
})

router.use((req,res)=>errorHandler(res,404,"Error Page Not Found in the Cards "))


module.exports =router;