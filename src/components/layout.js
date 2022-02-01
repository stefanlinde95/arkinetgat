import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

import "bootstrap/dist/css/bootstrap.min.css"
import "../style/bootstrap-override.css"
import "./layout.css"

const Layout = ({ children, home, contact, portfolio }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={home || `Title`}
        contact={contact}
        home={home}
        portfolio={portfolio}
      />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <div className="container">
            <div className="row my-3">
              <div className="col-12">
                © {new Date().getFullYear()} Arkinet OÜ
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
