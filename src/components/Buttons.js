import { useLightbox } from "simple-react-lightbox"
import React, { useRef, useEffect } from "react"

export default function Buttons({ term, count }) {
  const { openLightbox } = useLightbox()
  const openImg = parseInt(term)
  const inputRef = useRef(null)

  useEffect(() => {
    console.log("useEffect triggered in Buttons")
    if (term) {
      setTimeout(() => {
        inputRef.current.click()
      }, 2000)
    }
  }, [])

  return (
    <>
      <button
        className="shared-img"
        ref={inputRef}
        onClick={() => openLightbox(openImg - 1)}
      >
        Open the image
      </button>
    </>
  )
}
