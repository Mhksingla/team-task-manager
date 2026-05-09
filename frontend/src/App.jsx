import { useEffect, useState } from "react";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App(){

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(()=>{

    const token = localStorage.getItem("token");

    if(token){
      setIsLoggedIn(true);
    }

  },[]);

  return(

    <div>

      {
        isLoggedIn ? (
          <Dashboard/>
        ) : (
          <>
            <Signup/>
            <hr/>
            <Login/>
          </>
        )
      }

    </div>

  );

}

export default App;