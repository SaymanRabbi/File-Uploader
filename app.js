const express = require('express');
const { upload } = require('./uploadFile');
const app = express();
app.post('/file-upload',upload.single('doc'),(req,res)=>{
    console.log(req);
  res.send('hello world')
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})