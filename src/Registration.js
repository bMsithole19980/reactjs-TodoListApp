import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registration(props){
    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');
    const [showPassword, setShowPassword]= useState(false);
    const navigate =useNavigate();

    const handlePassword=()=>{
        setShowPassword(!showPassword);

    }
    const handleLogin=()=>{
        alert('successfully logged in');
        navigate('/home')

    }

    return(

        <div className="login-container">
        <div className="form-group">

           <div className="form-container"  style={{ backgroundColor: "transparent" }}>
              <h1>Sign Up Page</h1>
              <input type="txt" onChange={(event)=>setUsername(event.target.value)} placeholder="Enter username or email"></input>
              <div className="password-container">
                <input type={password ? 'text' : password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"></input>
                <span className="passwordHide" onClick={handlePassword}>
                    {showPassword ? <i className=" fas fa-eye-slash" style={{color:"black"}}></i>:<i className="fas fa-eye"></i>}
                </span>
               
              </div>
              <button onClick={handleLogin}>Login</button>
              <h3>Already have an account : <Link to='/' style={{color:"blue" ,textDecoration:"none"}}>Sign Up</Link></h3>
            </div>
        </div>
    </div>
        
    )
}
export default Registration;