import React from "react"; 

function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                <h6 class="text-uppercase fw-bold mb-4"style={{paddingTop:"10px",color:"black"}}>
                  <i class="fas fa-gem me-3"></i>Dotzcart
                </h6>
                <p style={{ textAlign: "justify", fontFamily: "sans-serif" }}>
                  Dotzcart is your one-stop  destination.Our exhaustive
                  range of electronic gadgets will help people to get in touch with differnt 
                  devices. Dotzcart will keep people updated and have back each time.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"style={{paddingTop:"10px"}}>
                <h6 class="text-uppercase fw-bold mb-4"style={{color:"black"}}>Products</h6>
                
               <p>
                  <a href="#!" class="text-reset">
                    Mobiles
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                   Electronic Appliances
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"style={{paddingTop:"10px"}}>
                <h6 class="text-uppercase fw-bold mb-4" style={{color:"black"}}>Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"style={{paddingTop:"10px"}}>
                <h6 class="text-uppercase fw-bold mb-4 "  style={{color:"black"}}>Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>{" "}
                  Kazhakuttam,Kerala,Trivandrun
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  Dotzcart@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> 04651 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> 04651 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="">
            Dotzcart.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
