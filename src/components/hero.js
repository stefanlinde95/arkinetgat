import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import forest from "../assets/forest.jpg"

export default function Hero() {
  return (
    <div
      className="hero d-flex position-relative overflow-hidden text-center"
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
  )
}
