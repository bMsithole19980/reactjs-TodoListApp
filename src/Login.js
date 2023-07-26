//import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(props) {

    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');
    const [showPassword, setShowPassword]= useState(false);
    const navigate =useNavigate();

    //handle form submission
    
    const handlePassword=()=>{
        setShowPassword(!showPassword);

    }

    const handleLogin=()=>{
        if(username.trim()=== '' || password.trim()===''){
            alert("Please enter a valid passowrd and username")

        }
        alert('successfully logged in');
        navigate('/home')

    }
   

    return (
       

        <div className="login-container">
            <div className="form-group">

               <div className="form-container"  style={{ backgroundColor: "transparent" }}>
                  <h1>Login Page</h1>
                  <input type="txt" onChange={(event)=>setUsername(event.target.value)} placeholder="Enter username or email"></input>
                  <div className="password-container">
                    <input type={password ? 'text' : password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"></input>
                    <span className="passwordHide" onClick={handlePassword}>
                        {showPassword ? <i className=" fas fa-eye-slash" style={{color:"black"}}></i>:<i className="fas fa-eye"></i>}
                    </span>
                   
                  </div>
                  <button onClick={handleLogin}>Login</button>
                  <h3>No account : <Link to='registration' style={{color:"blue" ,textDecoration:"none"}}>Register</Link></h3>
                </div>
            </div>
        </div>

    )
}
export default Login;

