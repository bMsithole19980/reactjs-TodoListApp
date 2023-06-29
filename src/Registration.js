import { useState } from "react";
import { Link } from "react-router-dom";

function Registration(props){
    const [name , setName]=useState('');
    const [surname , setSurname]=useState('');
    const [password , setPassword]=useState('');
    const [confPass , setConfPassword]=useState('');
    const [username , setUsername]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();

    }
    const add=(event)=>{
        event.preventDefault();
        props.add(name,surname,password,confPass,username);
        console.log(add);

    }

    

    return(

       
        <div className="row">
        <div className="offsett-1g-3 col-1g-6">

           <form className="FRM" onSubmit={handleSubmit} style={{ backgroundColor: "aqua" }}>
                <h1>SignUp</h1>
                <div className="form-outline mb-4 text:right">
                    <label className="form-label" style={{ textAlign: "left" }} >Name</label><br></br>
                    <input id="form2Example1" value={name} type="name" onChange={(event)=>setName(event.target.value)}    placeholder="Enter First Name" className="form-control" />

                </div>


                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">surname</label><br></br>
                    <input id="form2Example1" type="text" value={surname} onChange={(event)=>setSurname(event.target.value)}   placeholder="Enter Last name" className="form-control" />
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Password</label><br></br>
                    <input id="form2Example1" type="text"  value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" className="form-control" />
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Confirm password</label><br></br>
                    <input id="form2Example1" type="text" value={confPass} onChange={(event)=>setConfPassword(event.target.value)}  placeholder="retype the password" className="form-control" />
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-outline mb-4 text:right">
                    <label className="form-label" style={{ textAlign: "left" }} >Username</label><br></br>
                    <input id="form2Example1" value={username} type="username" onChange={(event)=>setUsername(event.target.value)}   placeholder="Enter email address" className="form-control" />

                </div>
                

                <button to={'/Registration'} onClick={add}  type="button" className="btn btn-sucess">SignUp</button>


                <div className="text-center">
                    <p>Already registered <Link to={'/'} className="btn btn-success"> Login</Link></p>


                </div>
            </form>
        </div>
    </div>
    )
}
export default Registration;