import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderSearch = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={250}
    viewBox="0 0 200 250"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    style={{ 
        marginBottom: 20
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="18" ry="18" width="200" height="182" /> 
    <Rect x="0" y="192" rx="7" ry="7" width="200" height="19" /> 
    <Rect x="0" y="226" rx="7" ry="7" width="171" height="18" />
  </ContentLoader>
)

export default LoaderSearch