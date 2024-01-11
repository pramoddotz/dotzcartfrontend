import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Search() {

  const {title}=useParams();
  const [data, setdata] = useState([]);

  console.log(title);


    useEffect(() => {
        axios
          .post('http://localhost:4000/SearchProducts',{title:title})
          .then((e) => {
           
            setdata(e.data.data);

            console.log(e);
          })
          .catch((b) => {
            console.log(b);
          });
      }, []);

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

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
   
    <div class="container text-center" style={{ padding: "1px" }}>
      <div class="row">
        {data.map((e) => {
          return (
            <div class="col" style={{ height: "30rem"}}>
              <div class="card" style={{ width: "18rem", height: "450px" }}>
                <img
                  src={`http://localhost:4000/${e.image.filename}`}
                  style={{ height: "18rem" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h6 class="card-title">{e.title}</h6>
                  <p class="card-text">
                    <h3 style={{ color: "green" }}>₹{e.price}</h3>
                    
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
  )
}
