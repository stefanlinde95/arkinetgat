import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

function Pildid({ data }) {
  const images = data.allFile.edges
  return (
    <Layout>
      <Seo title="Pildid" />
      <div className="container my-5">
        <div className="mb-5">
          <div className="col-sm-12">
            <h1>Tehtud tööd</h1>
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
                        alt={`https://arkinet.ee/${image.node.base}`}
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

export const pageQuery = graphql`
  query {
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
export default Pildid
