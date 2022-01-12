import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Pildid = () => {
  const allImagesQuery = graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(
                maxHeight: 200
                maxWidth: 200
                cropFocus: CENTER
                fit: COVER
                quality: 70
              ) {
                base64
                aspectRatio
                src
                srcSet
                sizes
                originalImg
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)

  return (
    <Layout>
      <Seo title="Pildid" />
      <div className="container my-5">
        <div className="mb-5">
          <div className="col-sm-12">
            <h1>Tehtud tööd</h1>
          </div>
        </div>
        <div className="row">
          {images.map(image => (
            <div className="img-col col-sm-12 col-md-6 col-lg-3" key={image.node.id}>
              <a
                href={image.node.childImageSharp.fluid.originalImg}
                target="_blank"
                rel="noreferrer"
              >
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Pildid
