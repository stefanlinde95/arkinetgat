import * as React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { useTranslation } from "gatsby-plugin-react-i18next"

import "bootstrap/dist/css/bootstrap.min.css"

const Galmenu = () => {
  const { t } = useTranslation()
  return (
    <ul className="gal-menu">
      <li>
        <Link to="/images">{t("all")}</Link>
      </li>
      <li>
        <Link to="/images/floors">{t("floors")}</Link>
      </li>
      <li>
        <Link to="/images/stairs">{t("stairs")}</Link>
      </li>
      <li>
        <Link to="/images/doors">{t("doors")}</Link>
      </li>
    </ul>
  )
}

export default Galmenu
