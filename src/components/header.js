import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Link
          className="fs-5"
          style={{
            color: "black",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          to="/"
        >
          {siteTitle}
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
      </Container>
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
