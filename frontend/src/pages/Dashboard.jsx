import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard(){

    const [data,setData] = useState({});

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

            <h1>Dashboard</h1>

            <h3>Total Tasks: {data.totalTasks}</h3>

            <h3>Completed Tasks: {data.completedTasks}</h3>

            <h3>Pending Tasks: {data.pendingTasks}</h3>

            <h3>Overdue Tasks: {data.overdueTasks}</h3>

        </div>

    );

}

export default Dashboard;