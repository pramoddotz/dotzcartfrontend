import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
function Editproduct() {
  const { id } = useParams();

const [data, setData] = useState({

  
});

useEffect(() => {
  console.log("id",id);
  axios
    .post(`http://localhost:4000/finddataById/${id}`)
    .then((res) => {
     
      console.log(res.data.data);
    setData(res.data.data)
    })
    .catch((err) => {
      console.log(err, "err");
    });
}, []);

const changefn = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });

};
const submitbtn = (e) => {
  e.preventDefault();
  console.log("Updated Successfully", data);
  axios
    .post(
      `http://localhost:4000/Editproduct/${id}`,
      data
      )
      .then((res) => {
        console.log("Submitted", res);
        alert("product added successfully");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        textAlign: "center",
        margin: "100px",
        marginBottom: "120px",
        borderRadius: "20px",
      }}
    >
      <form class="row g-3">
        <div class="col-md-6">
          <label
            for="exampleInputtext"
            class="form-label"
            style={{ fontFamily: "sans-serif", fontWeight: "10px" }}
          >
            Name
          </label>
          <input type="text"class="form-control"id="title"value={data.name}name="name"onChange={changefn}/>
        </div>
        <br />
        <div class="col-md-6">
          <label for="exampleInputtext" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            name="price"
            value={data.price}
            onChange={changefn}
          />
        </div>
        <div class="col-md-6">
          <label for="exampleInputtext" class="form-label">
            Category
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            name="categary"
            value={data.categary}
            onChange={changefn}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={data.description}
            onChange={changefn}
          ></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={submitbtn}>
            Update Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default Editproduct