const Mongoose = require('mongoose')

// const connectionString = ''

const connectDB = (url) => {
    return Mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}
module.exports = connectDB

