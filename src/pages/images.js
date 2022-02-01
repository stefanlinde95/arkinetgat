import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Galmenu from "../components/galmenu"

function Images({ data }) {
  const { t } = useTranslation()
  const images = data.allFile.edges
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="container my-5">
        <div className="mb-4">
          <h1>{t("portfolio")}</h1>
        </div>
        <Galmenu />
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

export default Images

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
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
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
