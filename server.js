const express=require("express")
var cors = require('cors')

const app=express()

app.use(cors({
    origin:["http://localhost:5173","https://todo-fullstack-frontend-amber.vercel.app"]
}))
const mongoose = require('mongoose');
const userRoutes=require('./src/routes/userroutes')
const taskRoutes=require('./src/routes/taskroutes')

const dotenv = require('dotenv')
dotenv.config("./env")
const dbPassword=process.env.DB_PASSWORD


mongoose.connect(`mongodb+srv://subhadra:${dbPassword}@main.lmfgj.mongodb.net/?retryWrites=true&w=majority&appName=main`)
.then(res=>{
    console.log("DB connected successfully")
}).catch(err=>{
    console.log("DB connection failed")
})

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(express.json())
app.use("/task",taskRoutes)
app.use("/user",userRoutes)


let tasks=[
    {   id:1,
        task:"Go to Shop"
    },
    {   id:2,
        task:"Buy Tomato"
    },
    {
        id:3,
        task:"Buy Potato"
    },
    {
        id:4,
        task:"Come Back"
    }
]


app.listen(3000)
