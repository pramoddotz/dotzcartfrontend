import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import logo from "./images/imag1.png";
import "./Front.css";
import { Link, useNavigate } from 'react-router-dom'


function Login() {
//     const[data,setData]=useState({email:"",password:"",})
//   const formHandle=(e)=>{
//       setData({...data,[e.target.name]:e.target.value})
//   }
const mainnavigate = useNavigate();


const [data, setdata] = useState({
  Email: "",
  Password: "",
});
const changefn = (e) => {
  setdata({ ...data, [e.target.name]: e.target.value });
};

const sumtbtn = (e) => {
  e.preventDefault();
  console.log(data);

  axios
    .post("http://localhost:4000/userlogin", data)
    .then((res) => {
      console.log("Submitted", res);
      if (res.data.status === 200){
      alert("Login Success"); 
        localStorage.setItem("logid", res.data.data._id);
        mainnavigate("/product");
       
      }
      alert(res.data.msg);
    })
    .catch((err) => {
      console.log("Error", Error);
      alert("incorrect email or password");
    });
};

  return (
    <div className="win"  style={{marginTop:"78px"}}>
    <header>
      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
            <img class="img_1" src={logo} alt="dotzcart Logo" />
          </div>
        </div>
      </div>
    </header>

    <div class="d-flex flex-row justify-content-center">
      <div class="row">
        <div class="col-md">
          <form className="myform" onSubmit={sumtbtn}>
            <div class="sign-in signin">Sign In</div>
            <div class="form-group">
              <label id="words_1" for="exampleInputEmail1">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                name="Email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={changefn}
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label id="words_2" for="exampleInputPassword1">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="Password"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={changefn}
              />
              <div class="form-group">
                <button type="submit" class="btnn btn-warning" id="sign-in"  >
                  Sign In
                </button>
              </div>
            </div>
            <div class="form-check"></div>
            <Link to={'/'}>
            <button type="button" class="btnn btn-warning" id="grey-button">
              Create your  account
            </button></Link>
          </form>
        </div>
      </div>
      {/* 
      <div class="d-flex flex-row justify-content-center footer_1">
        <div class="row">
          <div class="col">
            
          </div>
        </div>
      </div> */}
    </div>
  </div>
);
}



export default Login