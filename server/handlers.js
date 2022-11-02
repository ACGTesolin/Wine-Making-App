"use-strict"

const { MongoClient } = require("mongodb");
const mongo = require("mongodb");
require("dotenv").config();
const fs = require("fs");
const { builtinModules } = require("module");
const { response } = require("express");
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


// this function is used to add different events on the gantt chart to the database

const addGanttEvent = async (request, response) => {

    const client = new MongoClient(MONGO_URI, options);
    
    let ganttEvent = request.body; 

    try {

        await client.connect();

        const db = client.db("WineMakingApp");

        const result = await db.collection("GanttData").insertOne({ganttEvent});

        result

        ? response.status(201).json({status: 201, data: result, message:"Event added successfully"})
        : response.status(500).json({status: 500, message: error.message});

        await client.close();
        
    }catch(error){
        console.log(error.stack)
    }
};

// this function retrieves all the Gantt chart events from the database

const getGanttEvents = async (request, reponse) => {

    const client = new MongoClient(MONGO_URI, options);

    try{

        await client.connect();

        const db = client.db("WineMakingApp");

        const result = await db.collection("GanttData").find().toArray();
console.log(result)
        result 

        ? response.status(200).json({status: 200, data: result, message: "All Gantt events retrieved"})

        : response.status(404).json({status: 404, message:"Gantt events not retrieved"});

        client.close();
    }
    catch(error){
        console.log(error.stack)
    }
}

module.exports = {

            addGanttEvent,
            getGanttEvents
}