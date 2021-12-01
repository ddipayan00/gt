const express = require('express');
const path = require('path')
const app = express();
const tasks = require(path.resolve(__dirname,'routes','tasks'));
const connectDB = require(path.resolve(__dirname,'db','connect'));
require('dotenv').config();
const notFound = require(path.resolve(__dirname,'middleware','not-found'));
const errorHandlerMiddleware = require(path.resolve(__dirname,'middleware','error-handler'));

// middleware

app.use(express.static(path.resolve(__dirname,'public')))
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
