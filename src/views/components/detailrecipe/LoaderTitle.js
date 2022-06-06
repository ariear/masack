import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderTitle = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={70}
    viewBox="0 0 350 70"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    {...props}
  > 
    <Rect x="0" y="4" rx="7" ry="7" width="346" height="20" /> 
    <Rect x="0" y="38" rx="7" ry="7" width="241" height="20" />
  </ContentLoader>
)

export default LoaderTitle