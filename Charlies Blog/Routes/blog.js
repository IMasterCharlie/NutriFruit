const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/home.html"))
    // res.send('message received')
})

router.get('/apple', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Apple.html"))
})

router.get('/watermelon', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Watermelon.html"))
})

router.get('/mango', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Mango.html"))
})

router.get('/orange', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Orange.html"))
})

router.get('/pineapple', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Pineapple.html"))
})

router.get('/strawberry', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Strawberry.html"))
})

router.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/About.html"))
})

router.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/Contact.html"))
})



router.get('/blogpost/:slug', (req,res)=>{
    console.log(req.params.slug)
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,"../templates/blogPage.html"))
})

module.exports = router;