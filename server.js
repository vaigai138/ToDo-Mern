const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URL;

app.use(express.json()); 
app.use(cors());

mongoose
.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

app.use(routes)


app.listen(PORT,()=>console.log('Server Up !')
);