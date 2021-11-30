const express = require('express')
const Task = require('../models/task')

const getAllTasks = (req,res) =>{
    res.status(200).send('Get all items')
}
const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
    res.status(200).json({ task })
    }
    catch(err){
        res.status(500)
    }
    
}
const getTask = (req,res) =>{
    res.status(200).json(
        {
            id: req.params.id
        }
    )
}
const updateTask = (req,res) =>{
    res.status(200).send(`Updated ${req.params.id} items`)
}
const deleteTask = (req,res) =>{
    res.status(200).send(`${req.params.id} successfully deleted `)
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
