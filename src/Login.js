//import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login(props) {

    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');

    //handle form submission
    
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        //const userData={username,password};
    }
    const addUser=((event)=>{
        event.preventDefault();
        props.addUser(username, password);


    })
   
    return (
       

        <div className="row">
            <div className="TodoForm">

               <form className="FRM" onSubmit={handleSubmit} style={{ backgroundColor: "transparent" }}>
                    <h1>Login</h1>
                    <div className="form-outline mb-4 text:right">
                        <label className="form-label" style={{ textAlign: "left" }}  >Username</label><br></br>
                        <input  type="username" onChange={(event)=>setUsername(event.target.value)}  value={username} placeholder="Enter username" className="form-control" />

                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label">Password</label><br></br>
                        <input  type="password" onChange={(event)=>setPassword(event.target.value)}  value={password} placeholder="Enter password" className="form-control" />
                        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>


                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""  />
                                <label  style={{ textAlign: "right" }} className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">

                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <button to={'/Registration'} onClick={addUser} type="button" className="btn btn-sucess">Login</button>


                    <div className="text-center">
                        <p>Not Registered? <Link to={'/Registration'} className="btn btn-success"> Register</Link></p>


                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;

/*
<div className="row">
            <div className="offsett-1g-3 col-1g-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input required value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name}  onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter employee name" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Surname</label>
                                        <input required value={surname}  onChange={e=>setSurname(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        
                                        <label>Email</label>
                                        <input required value={email}  onChange={e=>setEmail(e.target.value)} className="form-control " placeholder="Enter employee email"  ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input required value={phone}  onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Position</label>
                                        <input required value={position}  onChange={e=>setPosition(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input required value={image} type="file" onChange={handleImage} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="btn">
                                   <button  className="btn btn-success">Submit</button>
                                  <Link to={'/'} className="btn btn-danger">Back</Link>
                                </div>

                                
                                
                                
                                
                                


                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>

*/