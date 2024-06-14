const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config();
const path = require('path')

const userRoutes=require('./server/routes/user')
const postRoutes=require('./server/routes/post')
const postAttributesRoutes=require('./server/routes/postAttributes')

mongoose.connect(process.env.dbURL)
.then(console.log("DB Connected!!"))
.catch(error=>console.log(error))

app.use(express.json()); // parse JSON bodies


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public', 'index.html')))

app.use('/user',userRoutes);
app.use('/post', postRoutes);
app.use('/postAttribute', postAttributesRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))