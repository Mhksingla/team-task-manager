import { useState } from "react";
import API from "../services/api";

function Signup(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignup = async ()=>{

        try{

            await API.post("/auth/signup",{
                name,
                email,
                password,
                role:"admin"
            });

            alert("Signup Successful");

        }
        catch(error){

            alert(error.response.data.message);

        }

    };

    return(

        <div style={{padding:"30px"}}>

            <h1>Signup</h1>

            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}
            />

            <br/><br/>

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

            <button onClick={handleSignup}>
                Signup
            </button>

        </div>

    );

}

export default Signup;