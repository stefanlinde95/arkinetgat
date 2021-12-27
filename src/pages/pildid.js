import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

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
      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h1>Tehtud tööd</h1>
          </Col>
        </Row>
        <Row>
          {images.map(image => (
            <Col className="img-col" key={image.node.id} lg={3} md={6} sm={12}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}
export default Pildid
