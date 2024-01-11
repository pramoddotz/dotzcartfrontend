import React ,{ useEffect,useState } from 'react';

import axios from 'axios';

function ViewallOrders() {


    const [data, setdata] = useState([]);
    console.log("test");
      useEffect(() => {
        axios
          .post("http://localhost:4000/viewallOrders")
          .then((res) => {
            console.log(res, "res");
            setdata(res.data.data);
          console.log(data)
            
          })
          .catch((err) => {
            console.log(err, "err");
           
          });
      }, []);



  return (

    <div style={{ backgroundColor: "white", padding: "90px" }}>
    <div class="container text-center" style={{ padding: "1px" }}>
      <div class="row">
        {data.map((e) => {
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
                   
                    <h5 class="card-title">Customer Name : <span style={{color:"red"}}>{e.Userid.Name}</span> </h5>
                   
                  
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

export default ViewallOrders