const express = require("express");

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE TASK
router.post("/", authMiddleware, async (req,res)=>{

    try{

        // ADMIN CHECK
        if(req.user.role !== "admin"){

            return res.status(403).json({
                message:"Access denied. Admin only."
            });

        }

        const {
            title,
            description,
            assignedTo,
            project,
            deadline
        } = req.body;

        const task = await Task.create({
            title,
            description,
            assignedTo,
            project,
            deadline
        });

        res.status(201).json(task);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// GET TASKS
router.get("/", authMiddleware, async (req,res)=>{

    try{

        const tasks = await Task.find()
        .populate("assignedTo","name email")
        .populate("project","title");

        res.status(200).json(tasks);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// UPDATE TASK STATUS
router.put("/:id", authMiddleware, async (req,res)=>{

    try{

        const {status} = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {status},
            {new:true}
        );

        res.status(200).json(updatedTask);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



module.exports = router;