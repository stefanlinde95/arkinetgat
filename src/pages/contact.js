import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Seo title={t("contact")} />
      <section id="contact">
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h1>{t("contact")}</h1>
            </div>
          </div>
          <div className="my-5">
            <h2>Arkinet OÜ</h2>
            <ul className="unstyled">
              <li>{t("reg_nr")}</li>
              <li>{t("kmkr")}</li>
              <li>{t("aadress")}</li>
            </ul>
            <h3>Andres Kirsipuu</h3>
            <ul className="unstyled">
              <li>(+372) 53 484 007</li>
              <li>andres(at)arkinet.ee</li>
            </ul>
          </div>
        </div>
        <iframe
          title="Arkinet Oü asukoht kaardil"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655957.23969596!2d22.29286203230245!3d58.87337470711787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ecc4fa865e783b%3A0x289f9515f72492bf!2sArkinet%20O%C3%9C!5e0!3m2!1sen!2see!4v1643507815676!5m2!1sen!2see"
          width="100%"
          height="560"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  )
}
export default Contact

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
