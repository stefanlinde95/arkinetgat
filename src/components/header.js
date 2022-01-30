import * as React from "react"
import PropTypes from "prop-types"
import logo from "../assets/logo.svg"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  return (
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
            <img
              className="logo"
              src={logo}
              alt="Arkinet"
              width={120}
              height={22}
            />
          </Link>
          <div className="d-flex align-items-center">
            <Link className="mx-2" to="/">
              {t("home")}
            </Link>
            <Link className="mx-2" to="/images">
              {t("portfolio")}
            </Link>
            <Link className="mx-2" to="/contact">
              {t("contact")}
            </Link>
            <ul className="languages d-flex">
              {languages.map(lng => (
                <li key={lng}>
                  <button
                    className="remove_button_css"
                    onClick={e => {
                      e.preventDefault()
                      changeLanguage(lng)
                    }}
                  >
                    {lng}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
