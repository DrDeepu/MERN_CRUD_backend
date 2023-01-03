const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://127.0.0.1:27017/ass04');
const stud_router = require('./Routes/test_route');

app.use(express.json());
app.use(cors());
app.use('/api', stud_router); 

app.get('/', () => {console.log("Hello world")})
app.listen(5000, () => console.log("Server is running 5000"));   