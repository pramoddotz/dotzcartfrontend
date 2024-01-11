import React from 'react'
import caro00 from './images/caro00.webp'
import caro11 from './images/caro11.webp'
import caro12 from './images/caro12.webp'
import caro13 from './images/caro13.webp'
function Carousel() {
  return (
    <div style={{margintop:"10px"}}>
        <div
  id="carouselExampleAutoplaying"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={caro00} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={caro11} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={caro12} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={caro13} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel