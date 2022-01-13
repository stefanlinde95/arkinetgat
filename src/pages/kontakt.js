import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Kontakt = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <h1>Kontakt</h1>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-12">
            <h2>Arkinet OÜ</h2>
            <ul className="unstyled">
              <li>Reg.: 10857552</li>
              <li>KMKR: EE100749643</li>
              <li>Address: Vihtra tee 1, Suurejõe, 87602 Pärnumaa</li>
            </ul>
          </div>
          <div className="col-sm-12">
            <h3>Andres Kirsipuu</h3>
            <ul className="unstyled">
              <li>(+372) 53 484 007</li>
              <li>andres(a)arkinet.ee</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Kontakt
