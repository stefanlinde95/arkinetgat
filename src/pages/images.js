import React from "react"
import { Buffer } from "buffer"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Buttons from "../components/Buttons"

const IMAGES_PARENT_ID = "images"

const isBrowser = () => typeof window !== "undefined"

const encode = str => Buffer.from(str).toString("base64").substring(0, 12)

const createUrlWithId = id => {
  if (!isBrowser()) return
  const url = new URL(window.location.href)
  const params = url.searchParams
  params.set("id", id)
  return url.toString()
}

const createUrlWithoutId = () => {
  if (!isBrowser()) return
  const url = new URL(window.location.href)
  const params = url.searchParams
  params.delete("id")
  return url.toString()
}

const setUrlByImageIndex = index => {
  if (!isBrowser()) return
  const images = document.getElementById(IMAGES_PARENT_ID)?.children
  if (images?.length > index) {
    const imageId = images[index].id
    window.history.replaceState(null, "", createUrlWithId(imageId))
  }
}

const removeIdFromUrl = () => {
  if (!isBrowser()) return
  window.history.replaceState(null, "", createUrlWithoutId())
}

function Images({ data }) {
  const { t } = useTranslation()
  const images = data.allFile.edges
  const queryParams = new URLSearchParams(isBrowser() && window.location.search)
  const queryImageId = queryParams.get("id")

  const getPictureDescription = imageRelativePath =>
    t(`pictureDescriptions.${imageRelativePath}`, "")

  const lightboxOptions = {
    buttons: { showDownloadButton: false },
    thumbnails: { showThumbnails: false },
  }
  const lightboxCallbacks = {
    onSlideChange: ({ index }) => setUrlByImageIndex(index),
    onLightboxOpened: ({ currentSlide: { id } }) => setUrlByImageIndex(id),
    onLightboxClosed: () => removeIdFromUrl(),
  }

  return (
    <Layout>
      <Seo title="Portfolio" />
      <section>
        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper options={lightboxOptions} callbacks={lightboxCallbacks}>
              <div id={IMAGES_PARENT_ID} className="row">
                {images.map(image => {
                  const imageId = encode(image.node.relativePath)
                  return (
                    <div
                      id={imageId}
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
                          alt={getPictureDescription(image.node.relativePath)}
                        />
                      </a>
                    </div>
                  )
                })}
              </div>
            </SRLWrapper>
            <Buttons id="shared-img" queryImageId={queryImageId} />
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
          relativePath
        }
      }
    }
  }
`
