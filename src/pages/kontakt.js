import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const Kontakt = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <Container className="my-5">
        <Row>
          <Col lg={12} sm={12}>
            <h1>Kontakt</h1>
          </Col>
        </Row>
        <Row className="my-5">
          <Col sm={12}>
            <h2>Arkinet OÜ</h2>
            <ul className="unstyled">
              <li>Reg.: 10857552</li>
              <li>KMKR: EE100749643</li>
              <li>Address: Vihtra tee 1, Suurejõe, 87602 Pärnumaa</li>
            </ul>
          </Col>
          <Col sm={12}>
            <h3>Andres Kirsipuu</h3>
            <ul className="unstyled">
              <li>(+372) 53 484 007</li>
              <li>andres(a)arkinet.ee</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Kontakt
