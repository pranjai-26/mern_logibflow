const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const DB_NAME = 'loginflow';

const app = express();
const PORT = 5000

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/" + DB_NAME, { useNewUrlParser: true,});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

var loginRouter = require("./routes/login");

app.use("/login", loginRouter);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})