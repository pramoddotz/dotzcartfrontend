import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/imag1.png";

export default function Navbar() {





  return (
    <div className="myNav">
      <nav className="navbar navbar-expand-lg color">
        <div className="container-fluid">
          <img src={logo} className="logo_size" />
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
                  className="form-control me-2 boxforsearch"
                  type="search"
                  placeholder="Search dotzcart.in"
                  aria-label="Search"
                />
                <button type="submit" className="btn btn-outline-warning" >
                  Search
                </button>
              </form>
              <li className="nav-item dropdown ">
              
                <ul className="dropdown-menu">
                  <Link to={"/product"}>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ color: "orange" }}
                      >
                        View All Produtcs
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
           
          
            <Link to="/Register" class="nav-item nav-link active">
              <button type="button" class="btn btn-warning">
                Register
              </button>
            </Link>{" "}
            &nbsp; &nbsp;
            <Link to="/Login" class="nav-item nav-link active">
              <button type="button" class="btn btn-warning">
                Login
              </button>
            </Link>
            &nbsp; &nbsp;
          
          </div>
        </div>
      </nav>
    </div>
  );
}