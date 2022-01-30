import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout home={t("home")}>
      <Seo title={t("home")} />
      <Hero subtitle={t("subtitle")} />
      <div id="meist" className="container">
        <div className="row py-5 mb-5 content">
          <div className="pt-5 col-sm-12 col-md-10 col-lg-7">
            <h2 className="mb-2">{t("subtitle")}</h2>
            <p className="intro">{t("first_para")}</p>
            <p>{t("second_para")}</p>
            <p>{t("third_para")}</p>
          </div>
          <div className="mt-5 col-xs-12 col-md-4 col-lg-5 d-md-block d-none">
            <div className="row">
              <StaticImage
                src="../assets/el-1.jpg"
                placeholder="blurred"
                className="about-us-img d-none d-lg-block col-5"
                alt="arkinet puittrepid"
                width={200}
              />
              <StaticImage
                src="../assets/el-2.jpg"
                placeholder="blurred"
                className="about-us-img mt-5 mx-3 d-none d-lg-block col-5"
                alt="puidust trepp"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        fileAbsolutePath: { ne: "/images/" }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
