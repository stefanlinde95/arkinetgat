import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { useTranslation } from "gatsby-plugin-react-i18next"
import sha256 from "crypto-js/sha256"
import Layout from "./layout"
import Seo from "./seo"
import Buttons from "./buttons"
import Galmenu from "./galmenu"

const IMAGES_PARENT_ID = "images"

const isBrowser = () => typeof window !== "undefined"

const encode = str => sha256(str).toString().substring(0, 8)

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

const Gallery = ({ data, title }) => {
  const { t } = useTranslation()
  const images = data.allFile.edges
  const queryParams = new URLSearchParams(isBrowser() && window.location.search)
  const queryImageId = queryParams.get("id")

  const getPictureDescription = imageRelativePath =>
    t(`pictureDescriptions.${imageRelativePath}`, "")

  const lightboxOptions = {
    buttons: { showDownloadButton: false, showAutoplayButton: false },
    thumbnails: { showThumbnails: false },
  }
  const lightboxCallbacks = {
    onSlideChange: ({ index }) => setUrlByImageIndex(index),
    onLightboxOpened: ({ currentSlide: { id } }) => setUrlByImageIndex(id),
    onLightboxClosed: () => removeIdFromUrl(),
  }

  return (
    <Layout>
      <Seo title={title} />
      <section>
        <div className="container my-5">
          <div className="mb-4">
            <h1>{title}</h1>
          </div>
          <Galmenu />
          <SimpleReactLightbox>
            <SRLWrapper options={lightboxOptions} callbacks={lightboxCallbacks}>
              <div id={IMAGES_PARENT_ID} className="row">
                {images.map(image => {
                  const imageId = encode(image.node.relativePath)
                  return (
                    <div
                      id={imageId}
                      className="img-col col-6 col-md-4 col-lg-3 col-xl-2"
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

export default Gallery
