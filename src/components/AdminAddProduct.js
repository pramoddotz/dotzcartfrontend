import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavebar from "./Adminnavebar";
function AdminAddProduct() {
  const [data, setData] = useState({
    name: "",
    price: "",
    categary: "",
    description: "",
    image:null
  });
  const Navigate = useNavigate();
  const formHandle = (e) => {
    if (e.target.name == "image") { 
      setData({ ...data, image: e.target.files[0] }); 
    } else { 
    setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:4000/addproduct", data,{ headers: { "Content-Type": "multipart/form-data", }})
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("product added successfully");
          Navigate("/Adminlogin")
        } else {
          alert("product not aded");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <Adminnavebar />
      </div>
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <div className="logindiv">
            <h4 style={{ textAlign: "center" }}>Product details!</h4>
            {/* <div class="row">
            <div class="col-3">
                <div class="card" style={{width: "5rem"}}>
                <img width ="12rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnpoSVjWtMDef2VkEzR3ZoZAisR7iZXpFgw&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                      </div>
                      </div>
                      </div>
                    </div> */}
                     {/* <div
      style={{
        backgroundColor: "lightblue",
        textAlign: "center",
        margin: "100px",
        marginBottom: "120px",
        borderRadius: "20px",
      }}
    > */}

   
            <div class="mb-3">
              <label for="exampleInputname" class="form-label">
                <b>Product name:</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                name="name"
                value={data.name}
                onChange={formHandle}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputname" class="form-label">
                <b>Price:</b>
              </label>
              <input
                type="number;"
                class="form-control"
                id="exampleInputNumber"
                name="price"
                value={data.price}
                onChange={formHandle}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputname" class="form-label">
                {" "}
                <b>Category:</b>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="categary"
                value={data.categary}
                onChange={formHandle}
              >
                <option selected>Select</option>
                <option value="Mobile phone">Mobile phone</option>
                <option value="Tv">Tv</option>
                <option value="headphones">Headphones</option>
                <option value="Other Electronic devices"> Other Electronic devices</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputname" class="form-label">
                {" "}
                <b>Description:</b>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="description"
                value={data.description5}
                onChange={formHandle}
              ></textarea>
            </div>
            <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile02"
            name="image"
            onChange={formHandle}
          />
          
        </div>
            <button
              type="submit"
              class="btn btn-warning"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
        </div>
      </>
      
  );
}

export default AdminAddProduct;
