const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/', (req, res) => {
    res.send("Hello World")
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started. Listening to ${PORT}`));