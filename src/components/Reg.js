import React, { useState } from "react";
import logo from "./images/imag1.png";
import axios from "axios";

function Reg() {
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitfn = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:4000/Regdetails", data)
      .then((res) => {
        console.log("Submitted", res);
        alert("Registration Successful")
      })
      .catch((err) => {
        console.log("Error", Error);
      });
  };

  return (
    <div style={{marginTop:"78px"}}>
      <div className="win">
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
              <form className="myform" onSubmit={submitfn}>
                <div class="sign-in signin">Create Account</div>
                <div class="form-group">
                  <label id="words_1" for="exampleInputEmail1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputname"
                    name="Name"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Name"
                    onChange={changefn}
                  />
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
                    <button type="submit" class="btnn btn-warning" id="sign-in">
                      Continue
                    </button>
                  </div>
                </div>

                <center style={{ color: "white" }}>
                  Already have an account?
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
