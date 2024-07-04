const express = require('express')
const app = express()

const port = 3000;

app.get("/", (request, response)=>{
    response.send("welcome to my first express app!")
})

app.get("/home", (request, response)=>{
    response.send("API information")
})

app.listen(port, ()=>{console.log(`server running at http://localhost:${port}`)})
