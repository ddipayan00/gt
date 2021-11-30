// const path = require('path') // USE FOR WIN/POSIX
const express = require('express')
const public = express.static('./public')
const tasks = require('./routes/tasks')
const bodyParser = require('body-parser')
const connectDB = require('./db/connect')
require('dotenv').config()

// APP
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))



app.use('/',public)
//app.use(bodyParser.raw())
app.use(bodyParser.json())

app.use('/api/v1/tasks',tasks)




// APP LISTEN
const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("Server started at port : 5000...........................................")
        })
    }
    catch (err) {
        console.log(err);
    }
}

// APP START
start()