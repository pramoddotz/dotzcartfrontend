import React from 'react'
import { useState } from 'react'
import {redirect,useNavigate } from 'react-router-dom'
// function Adminlogin() {
    // const[data,setData]=useState({email:"",password:"",})
    // const formHandle=(e)=>{
        // setData({...data,[e.target.name]:e.target.value})
   const Adminlogin=()=>{ 
    const[loggedin,setloggedin]=useState(false);
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const navigate=useNavigate();
    const handlelogin=()=>{
if(username==='pramoddotz25@gmail.com'&& password==='pramod@123'){
    setloggedin(true);
    navigate('/Adminlogin')
}
else
{
    alert('invalid credentials.please try again.');
}
    };

  return (
    <div>
    <div>
       <form>
       <div className='logindiv'>
       <h4 style={{ textAlign: 'center' }}>Welcome back Admin!</h4>
               <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label"><b>Email</b></label>
                   {/* <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={formHandle}/> */}
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={username} onChange={(e)=> setusername(e.target.value)}/>
               </div>
               <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label"> <b>Password</b></label>
                   {/* <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={data.password} onChange={formHandle} /> */}
                   <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={password} onChange={(e)=> setpassword(e.target.value)}/>
               </div>
               <button type="submit" class="btn btn-primary" style={{width:"100%"}} onClick={handlelogin}>log in</button>
               </div>
</form>

   </div>
   </div>
  )
}

export default Adminlogin