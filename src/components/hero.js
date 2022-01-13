import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import forest from "../assets/forest.jpg"
import forestMobile from "../assets/forest-mobile.jpg"
import down from "../assets/down.svg"

export default function Hero() {
  return (
    <div>
      <div
        className="hero position-relative overflow-hidden text-center d-md-flex d-none"
        style={{
          backgroundImage: `url(${forest})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-5 mx-auto">
          <h1>Arkinet</h1>
          <p className="lead fw-normal fs-4">Eesti puittööde meistrid</p>
        </div>
      </div>

      <div
        className="mobile-hero d-sm-flex position-relative overflow-hidden text-center d-md-none"
        style={{
          backgroundImage: `url(${forestMobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-5 mx-auto d-sm-block d-md-none">
          <h1>Arkinet</h1>
          <p className="lead fw-normal fs-4">Eesti puittööde meistrid</p>
          <a href="#meist">
            <img src={down} width={60} height={60} alt="next" />
          </a>
        </div>
      </div>
    </div>
  )
}
