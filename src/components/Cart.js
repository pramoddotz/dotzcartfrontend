import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Buynow from "./Buynow";

function Cart() {
  const navigate = useNavigate();
  const [viewcart, setcart] = useState([]);
  const userid = localStorage.getItem("logid");

  useEffect(() => {
    if (localStorage.getItem("logid") == null) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    axios
      .post(`http://localhost:4000/viewcartByuserid/${userid}`)
      .then((e) => {
        setcart(e.data.data);
        console.log(e.data.data);
        console.log(viewcart);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  const deletefn = (id) => {
    axios
      .post(`http://localhost:4000/RemovecartProduct/${id}`)
      .then((a) => {
        console.log("Deleted", a);
        if (a.status == 200) window.location.reload(false);
      })
      .catch((b) => {
        console.log("Error", b);
      });
  };

  const Buynow = (id) => {
    console.log(localStorage.getItem("logid"));
    console.log(id);
    axios
      .post(`http://localhost:4000/CreateOrder`, {
        Productid: id,
        Userid: localStorage.getItem("logid"),
      })
      .then((res) => {
        console.log(res, "res");
        alert("Please Fill The Delivery Address To Complete The Order")
        navigate("/buynow")
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div style={{ backgroundColor: "white", padding: "90px" }}>
      <div class="container text-center" style={{ padding: "1px" }}>
        <div class="row">
          {viewcart.map((e) => {
            return (
              <div class="col-3" style={{ height: "50rem" }}>
                <div class="card" >
                  <img
                    src={`http://localhost:4000/${e.Productid.img.filename}`}
                    style={{ height: "25rem" }}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">{e.Productid.name}</h6>
                    <p class="card-text">
                      <h3 style={{ color: "green" }}>₹{e.Productid.price}</h3>
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
                      <button
                          onClick={() => {
                            Buynow(e.Productid._id);
                          }}
                          class="btn btn-warning"
                        >
                          Buy Now{" "}
                        </button>
                    </p>
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

export default Cart;
