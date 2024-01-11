import React,{ useState, useEffect }  from 'react'
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'
import Adminnavebar from './Adminnavebar'
function Adminhome() {
    const navigate=useNavigate();
    const [data, setdata] = useState([]);
    console.log("test");
    useEffect(() => {
      axios
        .post("http://localhost:4000/viewproduct")
        .then((res) => {
          console.log(res, "res");
          setdata(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }, []);
    const Deletefn=(id)=>{

      axios.post(`http://localhost:4000/deleteproduct/${id}`)
      .then((res) => {
        console.log(res, "res");
      console.log(data)
      alert("Product Removed Successfully")
      window.location.reload(false)

      })
      .catch((err) => {
        console.log(err, "err");
       
      });
  
  
    }
  
 return (
    <div>
    <Adminnavebar/>
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <div class="container text-center" style={{ padding: "1px" }}>
        <div class="row">
                
                 {data.map((details)=>{

                    return(
              
                
                   
                        <div className="col" style={{ height: "40rem" }}>
                        <div class="card" style={{ width: "18rem", height: "500px" }}>
                        <img 
                        src={`http://localhost:4000/${details.img.filename}`} 
                        style={{ height: "18rem" }}
                        class="card-img-top"
                        alt="..."
                    />
                       <div class="card-body"> 
                    <h6 class="card-title">{details.name}</h6> 
                    <p class="card-text">
                     <h3 style={{color:"green"}}>{details.price}</h3>
                     <ul style={{listStyle:"none",color:"Red"}}>
                      <li>No cost EMI</li>
                      <li>Cash on Delivery</li>
                     </ul>
                    </p>
                        <Link to={`/editproduct/${details._id}`}><button type="button" class="btn btn-primary">Edit</button></Link><br></br>
                        <a href="#" class="btn btn-danger"  type="submit" onClick={()=>{Deletefn(details._id)}} >Delete</a>
                    </div>
                </div>
                </div>
                                
                )
              }
            )}
               
            </div></div>

            </div> 
</div>
  )
}

export default Adminhome