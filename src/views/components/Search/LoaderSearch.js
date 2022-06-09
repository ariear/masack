import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderSearch = (props) => (
  <ContentLoader 
    speed={0.8}
    width={150}
    height={200}
    viewBox="0 0 150 200"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    style={{ 
        marginBottom: 20
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="18" ry="18" width="150" height="130" /> 
    <Rect x="0" y="140" rx="7" ry="7" width="150" height="19" /> 
    <Rect x="0" y="170" rx="7" ry="7" width="130" height="18" />
  </ContentLoader>
)

export default LoaderSearch