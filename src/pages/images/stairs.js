import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Gallery from "../../components/gallery"

const Stairs = ({ data }) => {
  const { t } = useTranslation()

  return <Gallery data={data} title={t("stairs")} />
}

export default Stairs

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
    allFile(
      filter: { relativePath: { regex: "/(stair)|(stairs)|(trepid)/" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 320, quality: 50)
          }
          id
          publicURL
          base
          relativePath
        }
      }
    }
  }
`
