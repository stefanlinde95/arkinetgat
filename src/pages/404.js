import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <Row className="my-5">
        <h1>404: Not Found</h1>
        <p>Sinu otsitud lehte ei leitud.</p>
        <Link to="/">Avalehele</Link>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
