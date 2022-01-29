const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    throw new Error("DF")
    res.send('Hello W232orld!')
})
app.get('/3', (req, res) => {
 
    res.send('Hello W232orld!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})