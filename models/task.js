const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:String,
    taskDone:Boolean
})
 
module.exports = mongoose.model('Task',TaskSchema)