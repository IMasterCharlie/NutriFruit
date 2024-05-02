const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/Fruit_Users")


const messageSchema = {
    name:String,
    email:String,
    message:String
}

const Message = mongoose.model("Message", messageSchema)

app.post('/namuna',(req,res)=>{
    let newMessage = new Message({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    newMessage.save();
    res.redirect('/contact')
})


// routes of several pages 

app.use(express.static(path.join(__dirname, "static")))

app.use('/', require(path.join(__dirname, "routes/blog.js")))

app.post('/hero', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})