import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard(){

    const [data,setData] = useState({});

    const logout = ()=>{

        localStorage.removeItem("token");

        window.location.reload();

    };

    useEffect(()=>{

        fetchDashboard();

    },[]);

    const fetchDashboard = async ()=>{

        try{

            const token = localStorage.getItem("token");

            const res = await API.get("/dashboard",{
                headers:{
                    Authorization:token
                }
            });

            setData(res.data);

        }
        catch(error){

            console.log(error);

        }

    };

    return(

        <div style={{padding:"30px"}}>

            <h1>Team Task Manager Dashboard</h1>

            <button onClick={logout}>
                Logout
            </button>

            <hr/>

            <h2>Total Tasks: {data.totalTasks}</h2>

            <h2>Completed Tasks: {data.completedTasks}</h2>

            <h2>Pending Tasks: {data.pendingTasks}</h2>

            <h2>Overdue Tasks: {data.overdueTasks}</h2>

            <hr/>

            <h2>Project Management</h2>

            <p>Create and manage projects using backend APIs.</p>

            <hr/>

            <h2>Task Management</h2>

            <p>Create tasks and update status using Thunder Client.</p>

        </div>

    );

}

export default Dashboard;