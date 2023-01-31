// mongodb+srv://mohitePravin:<password>@fullstack-curd-data.lujzh3w.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://mohitePravin:<password>@fullstack-curd-data.lujzh3w.mongodb.net/react-blog-app.?retryWrites=true&w=majority

const express = require("express")
const mongoose = require("mongoose");
// const router = require("./routes/postRoutes");
const cors = require("cors")
 
mongoose.set("strictQuery", false);
const app = express() 
const PORT = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors)

// app.use("/posts" , router )

app.get("/",(req , res) =>{
    res.send("hello world, my first responce")
})
 

 
//connecting to mongodb
const urlm = "mongodb+srv://pravin:pravin1234@cluster0.qg419fw.mongodb.net/?retryWrites=true&w=majority"
// const connctionUrl =  "mongodb+srv://pravinmohite:pravin123@full-stack-database.xsy5nwd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(urlm , {
    useNewUrlParser: true
}).then(()=>{
    app.listen(PORT , ()=>{
        console.log(`db connected successfully http://localhost:${PORT}`)
    })
}).catch((err) => console.log("db connection failure",err))