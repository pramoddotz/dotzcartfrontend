import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,Navigate, useNavigate} from "react-router-dom";


function Product() {
  const navigate=useNavigate();
  const [data, setdata] = useState([]);
  console.log("test");
  useEffect(() => {
    axios
      .post("http://localhost:4000/viewproduct")
      .then((res) => {
        console.log(res, "res");
        setdata(res.data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);
  console.log(data);

  const addtocart = (id) => {
 
    axios
      .post(`http://localhost:4000/Addtocart`, {Productid:id,  Userid:localStorage.getItem('logid')})
      .then((res) => {
        console.log(res, "res");
        
        alert("Product Added Successfully");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("logid") == null) {
      navigate("/home");
    }
  }, []);


  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div class="container text-center" style={{ padding: "1px" }}>
        <div class="row">
          {data.map((e) => {
            return (
              <div class="col" style={{ height: "30rem"}}>
                <div class="card" style={{ width: "18rem", height: "450px" }}>
                  <img
                    src={`http://localhost:4000/${e.img.filename}`}
                    style={{ height: "18rem" }}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">{e.name}</h6>
                    <p class="card-text">
                      <h3 style={{ color: "green" }}>₹{e.price}</h3>
                      {/* <ul style={{ listStyle: "none" }}>
                        <li>No cost EMI</li>
                        <li>Cash on Delivery</li>
                      </ul> */}
                    </p>
                    <button
                      onClick={() => {
                        addtocart(e._id);
                      }}
                      class="btn btn-warning"
                    >
                      ADD TO CART
                    </button>{" "}
                    &nbsp; &nbsp;
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;