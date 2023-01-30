// mongodb+srv://mohitePravin:<password>@fullstack-curd-data.lujzh3w.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://mohitePravin:<password>@fullstack-curd-data.lujzh3w.mongodb.net/react-blog-app.?retryWrites=true&w=majority

const express = require("express")
const mongoose = require("mongoose");
const router = require("./routes/postRoutes");
const cors = require("cors")
 
mongoose.set("strictQuery", false);
const app = express() 

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors)

app.use("/posts" , router )

// app.get("/",(req , res) =>{
//     res.send("hello world, my first responce")
// })
 

 
//connecting to mongodb
const connctionUrl = "mongodb+srv://pravinmohite:pravin123@full-stack-database.xsy5nwd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connctionUrl , {
    useNewUrlParser: true
}).then(()=>{
    app.listen(8080 , ()=>{
        console.log("db connected successfully http://localhost:8080")
    })
}).catch((err) => console.log("db connection failure",err))