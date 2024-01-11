import React,{ useEffect, useState }from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import 'reactjs-popup/dist/index.css';
function Buynow() {
  const navigate = useNavigate();
  const [viewcart, setcart] = useState([]);
  const userid = localStorage.getItem("logid");
  const [totalprice, settotalprice] = useState(0);
  useEffect(() => {
    axios
      .post(`http://localhost:4000/vieworderByuserid/${userid}`)
      .then((e) => {
        setcart(e.data.data);
        console.log(e.data.data);
        console.log(viewcart);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  useEffect(() => {
    let x = 0;
    for (let i of viewcart) {
      // console.log(i.Productid.price);
      x += i.Productid.price;
    }
    console.log(x);
    settotalprice(x);
  }, [viewcart]);

  const deletefn = (id) => {
    axios
      .post(`http://localhost:4000/DeleteOrder/${id}`)
      .then((a) => {
        console.log("Deleted", a);
        if (a.status == 200) window.location.reload(false);
      })
      .catch((b) => {
        console.log("Error", b);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("logid") == null) {
      // navigate("/home");
    }
  }, []);
    const buynow=()=>{
        alert("Order Conformed")
      }
  return (
    <div style={{ backgroundColor: "white", margin: "150px 0px 0px 0px", minHeight:"650px"}}>
    <div class="container">
      <div className="row">
        <div className="col-8">
          <div className="row">
          {viewcart.length ? (
                 viewcart.map((e) => {
                  return (
                    <div class="col-3" style={{ height: "40rem" }}>
                      <div class="card" style={{ height: "500px" }}>
                        <img
                          src={`http://localhost:4000/${e.Productid.img.filename}`}
                          style={{ height: "18rem" }}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h6 class="card-title">{e.Productid.name}</h6>
                          <p class="card-text">
                            <h3 style={{ color: "green" }}>
                              ₹{e.Productid.price}
                            </h3>
                            <ul style={{ listStyle: "none" }}>
                              <li>No cost EMI</li>
                              <li>Cash on Delivery</li>
                            </ul>
                            <button
                              className="remove"
                              onClick={() => {
                                deletefn(e._id);
                              }}
                              class="btn btn-warning"
                            >
                              Remove{" "}
                            </button>
                            &nbsp; &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">No Product added</h6>
                  </div>
                </div>
              )}
              <h1> Total Payment : ₹{totalprice}</h1>
            </div>
          </div>
    {/*// order form*/}
    <div className="col-4">
    <form class="row g-3">
      <div class="row">
        <div class="col">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <div class="col">
          <label for="inputEmail4" class="form-label">
            Phone Number
          </label>
          <input
            type="number"
            class="form-control"
            placeholder="Phone Number"
            id="inputEmail4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Area name"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputZip" class="form-label">
            Pin
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label class="form-check-label" for="gridCheck">
              {" "}
              Check me out{" "}
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary " onClick={buynow} >
            Save and Deliver Here
          
          </button>
          </div>
          </div>
            </form>
          </div>
        
          </div>
      </div>
    </div>
  )
}

export default Buynow