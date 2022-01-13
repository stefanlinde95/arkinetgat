import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <div className="my-5">
        <h1>404: Not Found</h1>
        <p>Sinu otsitud lehte ei leitud.</p>
        <Link to="/">Avalehele</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
