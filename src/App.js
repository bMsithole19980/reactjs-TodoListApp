import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {

  const [user , setUser]=useState('');
  const [newUser, setNew]= useState('');
  const [todos, setTodos]=useState([]);

    //login adduser function
  const addUser=(username, password)=>{
     setUser((user)=>[...user,{ username:username, password:password }])
     console.log(user)

  };
  //registation
  const add=(name, surname ,  password, username,confPass )=>{
    setUser((newUser)=>[...user,{ name:name,surname:surname ,password:password, confPass:confPass, username:username }])
    console.log(newUser)

 };
 // add todoFunction
 const addTodo=(text) =>{
  let id =1;
  if(todos.length>0 ){
    id=todos[0].id +1;
  }
  let todo ={id:id ,text:text,completed: false}
  let newTodos =[todo, ...todos];
  setTodos(newTodos);
  console.log(newTodos);

 };
// delete todo function


 

  return (
    <div className="App" >
       <h2>To-do list App</h2>
       <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login addUser={addUser}/> } />
          <Route path='/Registration' element={<Registration add={add}   />} />
          <Route path='/Home' element={<Home todos={todos} setTodos={setTodos} key={todos.id} addTodo={addTodo}  />} />
          
        </Routes> 
        </BrowserRouter>
       </div>
    </div>
  );
}

export default App;

/*
//deleting the task user entered


*/