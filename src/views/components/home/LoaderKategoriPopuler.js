import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderKategoriPopuler = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 190 300"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="61" rx="19" ry="19" width="190" height="202" /> 
    <Circle cx="89" cy="65" r="46" />
  </ContentLoader>
)

export default LoaderKategoriPopuler