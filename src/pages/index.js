import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Avaleht" />

      <Hero />
      <div className="container">
        <div className="row py-5 mb-5 content">
          <div className="pt-5 col-sm-12 col-md-8 col-lg-7">
            <h1 className="mb-2">Arkinet puidust trepid</h1>
            <p className="intro">
              Oleme puittoodete valmistamisega tegelev ettevõte, tegutseme
              alates 2002. aastast. Meie meeskonnas on oma tööd hästi tundvad
              tislerid. Oma tooteid oleme saatnud ja käinud ka ise paigaldamas
              nii Soomes, Rootsis kui ka Norras.
            </p>
            <p>
              Põhiosa toodangust moodustavad trepid. Samas teeme täispuidust
              mööblit, kohvikute-restoranide sisustust, köögimööblit ja palju
              erinevaid tellimustöid, mis on kas erimõõdus või kliendi enda
              omanäoliste kavandite järgi. Kasutame erinevaid puiduliike nagu
              mänd, tamm, saar, kask ja pöök – harvemini ka mahagoni, pähklit
              jt. liike. Viimistluseks kasutame peitse, õlisid ja lakke –
              treppide puhul eriti tugevat spetsiaalset trepilakki (Saksa
              toode).
            </p>
            <p>
              2017. aastal saime heakskiidu PRIA meetmele maapiirkonnas
              majandustegevuse mitmekesistamise investeeringutoetusele.
              Investeeringu eesmärgiks on puidutöötlusseadmete kaasajastamine ja
              seeläbi tootmisprotsessi kiirendamine, mille tulemuseks on
              efektiivsem ja paindlikum töökorraldus.
            </p>
            <StaticImage
              src="../assets/eu-maaelufond.jpg"
              alt="eu põllumajandusfond"
              width={250}
              className="py-4"
            />
          </div>
          <div className="mt-5 col-xs-12 col-md-4 col-lg-5">
            <div>
              <StaticImage
                src="../assets/el-1.jpg"
                placeholder="blurred"
                className="about-us-img"
                alt="arkinet puittrepid"
                width={200}
              />
              <StaticImage
                src="../assets/el-2.jpg"
                placeholder="blurred"
                className="about-us-img mt-5 mx-3"
                alt="puidust trepp"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
