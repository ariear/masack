import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderListKategori = (props) => (
  <ContentLoader 
    speed={2}
    width={140}
    height={20}
    viewBox="0 0 140 20"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="0" rx="7" ry="7" width="130" height="20" />
  </ContentLoader>
)

export default LoaderListKategori