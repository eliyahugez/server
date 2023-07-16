const express = require('express')
const app = express()
express.use(express.json())
const port = 3000
const chalk = require('chalk');


app.get('/user', (req, res) =>{
    res.send({name:"user",age:55})
})
app.get('/', (req, res) =>{
    res.send([{name:"user",age:55},{name:"user",age:55}])
})
app.delete('/1', (req, res) =>{
    res.send("user deleted")
})
app.put('/2', (req, res) =>{
    res.send("user was updated")
})
app.patch('/2', (req, res) =>{
    res.send("user like this")
})

app.post('/', (req , res) =>{

})




app.listen(port, () => console.log(chalk.yellowBright(`Example app listening on port ${port}!`)))