import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Buttons from "../components/Buttons"

function Images({ data }) {
  const images = data.allFile.edges
  const isBrowser = () => typeof window !== "undefined"
  const queryParams = new URLSearchParams(isBrowser() && window.location.search)
  const term = queryParams.get("id")

  return (
    <Layout>
      <Seo title="Portfolio" />
      <section>
        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="row">
                {images.map((image, i) => (
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
                        alt={`https://arkinet.ee/images/?id=${++i}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </SRLWrapper>
            <Buttons id="shared-img" term={term} />
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
