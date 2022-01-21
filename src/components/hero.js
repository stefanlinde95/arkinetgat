import React from "react"
import forest from "../assets/forest.jpg"
import forestMobile from "../assets/forest-mobile.jpg"
import down from "../assets/down.svg"

export default function Hero({ subtitle }) {
  return (
    <div>
      <div
        className="hero position-relative overflow-hidden text-center"
        style={{
          backgroundImage: `url(${forest})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-5 mx-auto">
          <h1>Arkinet</h1>
          <p className="lead fw-normal fs-4">{subtitle}</p>
        </div>
      </div>

      <div
        className="mobile-hero position-relative overflow-hidden text-center"
        style={{
          backgroundImage: `url(${forestMobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-5 mx-auto d-sm-block d-md-none">
          <h1>Arkinet</h1>
          <p className="lead fw-normal fs-4">{subtitle}</p>
          <a href="#meist">
            <img src={down} width={60} height={60} alt="next" />
          </a>
        </div>
      </div>
    </div>
  )
}
