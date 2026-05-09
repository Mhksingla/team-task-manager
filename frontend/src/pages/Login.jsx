import { useState } from "react";
import API from "../services/api";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async ()=>{

        try{

            const res = await API.post("/auth/login",{
                email,
                password
            });

            localStorage.setItem("token",res.data.token);

            alert("Login Successful");

        }
        catch(error){

            alert("Login Failed");

        }

    };

    return(

        <div style={{padding:"30px"}}>

            <h1>Team Task Manager</h1>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <br/><br/>

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br/><br/>

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}

export default Login;