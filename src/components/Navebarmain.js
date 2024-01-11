import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import logo from "./images/imag1.png";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserCircle} from "react-icons/fa";

export default function Navbarmain() {

const navigate=useNavigate();

const [Searchdata, setSearchdata] = useState({
  title: ""
});

const changefn = (e) => {
  setSearchdata({ ...Searchdata, [e.target.name]: e.target.value });
  console.log(Searchdata);
};
useEffect(() => {
  console.log(Searchdata);
  axios
    .post('http://localhost:4000/SearchProducts',Searchdata)
    .then((e) => {
      
      console.log(e.data.data);
     
    })
    .catch((b) => {
      console.log(b);
    });
}, []);

const sumtbtn = (e) => {
  e.preventDefault();
  console.log(setSearchdata);
}


    useEffect(() => {
        if (localStorage.getItem("logid") == null) {
          navigate("/home");
        }
      }, []);
  return (
    <div className="myNav">
      <nav className="navbar navbar-expand-lg color">
        <div className="container-fluid">
        <Link to={"/product"}>
          <img src={logo} className="logo_size" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>{" "}
              &nbsp;
              <form className="d-flex bar " role="search">
                <input
                name="title"
                onChange={changefn}
                  className="form-control me-2 boxforsearch"
                  type="search"
                  placeholder="Search DotzCart.in"
                  aria-label="Search"
                />
               <Link to={`/SearcedComponent/${Searchdata.title}`} > <button type="submit" className="btn btn-outline-warning">
                  Search
                </button></Link> 
                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <div  style={{
                  color: "#ffc107",
                  marginRight: "auto",
                  fontSize: "24px",
                  marginBottom: "8px",
                }}>
               <FaUserCircle/>
                </div>

              </form>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white",fontSize:"bold",fontFamily:'sans-serif' }}
                >
                  User
                </a>
                <ul className="dropdown-menu">
                  <Link to={"/product"}>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                       
                      >
                        View All Produtcs
                      </a>
                    </li>
                  </Link>
                  <Link to={"/viewyourorders"}>
                  <li>
                    <a className="dropdown-item" href="#">
                    My Orders
                    </a>
                  </li>
                  </Link>
                 
                </ul>
              </li>
            </ul>
            <Link to={"/Cart"}>
              {" "}
              <div
                style={{
                  color: "#ffc107",
                  marginRight: "20px",
                  fontSize: "30px",
                  marginBottom: "8px",
                }}
              >
                {" "}
                <BsFillCartFill />
              </div>
            </Link>

            &nbsp; &nbsp;
            &nbsp; &nbsp;
            <Link to="/" class="nav-item nav-link active">
            <button type="button" onClick={()=>{localStorage.clear()}} class="btn btn-warning">
                Logout
              </button>
              </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}