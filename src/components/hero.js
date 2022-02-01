import React from "react"
import forest from "../assets/forest2.jpg"
import forestMobile from "../assets/forest2-mobile.jpg"
import down from "../assets/scroll-down.webp"
import logo from "../assets/logo.svg"

const ScrollDownArrow = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${down})`,
        backgroundSize: "cover",
        width: 150,
        height: 150,
      }}
      alt="next"
    ></div>
  )
}

const HeroWithBackground = ({ subtitle, backgroundImage }) => {
  return (
    <div
      className="hero position-relative overflow-hidden text-center
        d-flex flex-column justify-content-evenly align-items-evenly"
      style={{
        backgroundImage: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      <div className="opacity-75">
        <h1>
          <img
            className="mt-5 pt-5 logo light-shadow"
            src={logo}
            alt="Arkinet"
          />
        </h1>
        <p className="my-4 lead fw-normal fs-1 light-shadow">{subtitle}</p>
      </div>
      <div>
        <a className="mt-4" href="#about" style={{ display: "inline-block" }}>
          <ScrollDownArrow />
        </a>
      </div>
    </div>
  )
}

const Hero = ({ subtitle }) => {
  return (
    <>
      <div className="d-none d-md-block">
        <HeroWithBackground
          subtitle={subtitle}
          backgroundImage={`url(${forest})`}
        />
      </div>
      <div className="d-block d-md-none">
        <HeroWithBackground
          subtitle={subtitle}
          backgroundImage={`url(${forestMobile})`}
        />
      </div>
    </>
  )
}

export default Hero
