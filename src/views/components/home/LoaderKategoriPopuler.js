import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderKategoriPopuler = (props) => (
  <ContentLoader 
    speed={0.6}
    width={150}
    height={300}
    viewBox="0 0 150 300"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="61" rx="19" ry="19" width="150" height="202" /> 
    <Circle cx="75" cy="65" r="46" />
  </ContentLoader>
)

export default LoaderKategoriPopuler