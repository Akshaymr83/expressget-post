const express = require('express');
const app = express();
const port = 7300;
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/newClass')
    .then(() => {
        console.log('db is connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "hi i am akshay ,hello" }); 
});



app.listen(port, () => {
    console.log(`the server is running at ${port}`);
});