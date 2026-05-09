const express = require("express");

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// DASHBOARD STATS
router.get("/", authMiddleware, async (req,res)=>{

    try{

        const totalTasks = await Task.countDocuments();

        const completedTasks = await Task.countDocuments({
            status:"completed"
        });

        const pendingTasks = await Task.countDocuments({
            status:"pending"
        });

        const overdueTasks = await Task.countDocuments({
            deadline:{ $lt:new Date() },
            status:{ $ne:"completed" }
        });

        res.status(200).json({
            totalTasks,
            completedTasks,
            pendingTasks,
            overdueTasks
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports = router;