import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderPopularSearch = (props) => (
  <ContentLoader 
    speed={2}
    width={130}
    height={90}
    viewBox="0 0 130 90"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    style={{ 
      marginBottom: 20
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="0" ry="0" width="130" height="90" />
  </ContentLoader>
)

export default LoaderPopularSearch