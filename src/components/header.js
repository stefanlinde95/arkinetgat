import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"

import "bootstrap/dist/css/bootstrap.min.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          className="fs-5 py-2"
          style={{
            color: "black",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          to="/"
        >
          <img src={logo} alt={siteTitle} width={120} />
        </Link>
        <div>
          <Link className="mx-2" to="/">
            Avaleht
          </Link>
          <Link className="mx-2" to="/pildid">
            Pildid
          </Link>
          <Link className="mx-2" to="/kontakt">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
