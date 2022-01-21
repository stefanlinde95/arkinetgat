import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Galmenu from "../../components/galmenu"

function Doors({ data }) {
  const { t } = useTranslation()
  const images = data.allFile.edges
  return (
    <Layout>
      <Seo title={t("stairs")} />
      <div className="container my-5">
        <div className="mb-5">
          <div className="col-sm-12">
            <h1 className="text-center">{t("doors")}</h1>
            <Galmenu />
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="row">
                {images.map(image => (
                  <div
                    className="img-col col-sm-12 col-md-6 col-lg-3"
                    key={image.node.id}
                  >
                    <a
                      href={image.node.publicURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GatsbyImage
                        className="ratio ratio-1x1"
                        image={image.node.childImageSharp.gatsbyImageData}
                        alt={`https://arkinetgatmaster.gatsbyjs.io${image.node.publicURL}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </section>
    </Layout>
  )
}

export default Doors

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
    allFile(filter: { relativePath: { regex: "/(door)|(doors)|(uks)/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 5)
          }
          id
          publicURL
          base
        }
      }
    }
  }
`
