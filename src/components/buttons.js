import { useLightbox } from "simple-react-lightbox"
import React, { useRef, useEffect } from "react"

const findIndexOfElement = element => {
  return [...element.parentNode.children].indexOf(element)
}

const scrollToElement = elementId => {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" })
}

export default function Buttons({ queryImageId }) {
  const { openLightbox } = useLightbox()
  const buttonRef = useRef(null)

  const tryToOpenLightbox = elementId => {
    const element = document.getElementById(elementId)
    if (element) {
      openLightbox(findIndexOfElement(element))
    }
  }

  useEffect(() => {
    console.log("useEffect triggered in Buttons for " + queryImageId)
    if (queryImageId) {
      scrollToElement(queryImageId)
      setTimeout(() => {
        buttonRef.current.click()
      }, 2500)
    }
  }, [queryImageId])

  return (
    <>
      <button
        className="shared-img"
        ref={buttonRef}
        onClick={() => tryToOpenLightbox(queryImageId)}
      >
        Open the image
      </button>
    </>
  )
}
