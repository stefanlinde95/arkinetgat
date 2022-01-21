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
          <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
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
            <div className="col-sm-12 col-lg-4">
              <iframe
                title="Arkinet Oü asukoht kaardil"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2116571.0507128644!2d25.068667!3d58.797813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ecc4fb3236c37f%3A0x9d0b7c57a6d83ca2!2zU3V1cmVqw7VlLCBQw6RybnUgQ291bnR5LCBFc3Rvbmlh!5e0!3m2!1sen!2sus!4v1642675965487!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
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
