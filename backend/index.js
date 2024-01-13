const express = require("express")
const app = express()
const port= 3000;
var cors = require('cors')

app.use(cors());

app.get("/api/jokes", (req,res)=>{
    const jokes =[
        {
        id:1,
        title:"Aiooo joke",
        content: "This is a joke"
    },
    {
        id:2,
        title:"Aio joke",
        content: "This is a joke"
    },
    {
        id:3,
        title:"Aoo joke",
        content: "This is a joke"
    },
    {
        id:4,
        title:"Amkk joke",
        content: "This is a joke"
    },
    {
        id:5,
        title:"Amm joke",
        content: "This is a joke"
    }
]
res.send(jokes)
})

app.listen(port,()=>{
   console.log( ` port is working ${port}`)
})