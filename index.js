const express = require('express');
const path = require('path')
const app = express();
const port = 3000;


app.get('/', function (req, res) {
  // res.send('This is Home Section')
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about/', function (req, res) {
  // res.send('This Section is About '+ req.params.name)
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/gallery', function (req, res) {
  // res.send('This is About Section')
  res.sendFile(path.join(__dirname, 'gallery.html'))
})

app.listen(port,()=>{
  console.log(`Example app Listening at http://localhost:${port}`)
});