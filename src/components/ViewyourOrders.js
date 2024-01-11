import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

export default function ViewyourOrders() {
  const [viewcart, setcart] = useState([]);
  const userid = localStorage.getItem("logid");

  useEffect(() => {
    axios
      .post(`http://localhost:4000/viewMyOrders/${userid}`)
      .then((e) => {
        setcart(e.data.data);
        console.log(e.data.data);
        console.log(viewcart);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  // const Date = e.Date.Dateslice(0, 5);

  return (
    <div style={{ backgroundColor: "white", padding: "90px" }}>
      <div class="container text-center" style={{ padding: "1px" }}>
        <div class="row">
          {viewcart.map((e) => {
            return (
              <div class="col-3" style={{ height: "50rem" }}>
                <div class="card">
                  <img
                    src={`http://localhost:4000/${e.Productid.img.filename}`}
                    style={{ height: "25rem" }}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">{e.Productid.name}</h6>
                    <h6 class="card-title" style={{ color: "green" }}>
                      ₹{e.Productid.price}
                    </h6>
                    <h6 class="card-title">
                      Ordered On :{e.Date.slice(0, 10)}
                    </h6>

                    <h6 style={{ color: "red" }}>
                      Your Order has been placed.
                    </h6>
                 
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