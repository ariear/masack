import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderRecentRecipe = (props) => (
  <ContentLoader 
    speed={2}
    width={140}
    height={200}
    viewBox="0 0 140 200"
    backgroundColor="#DDDDDD"
    foregroundColor="#ecebeb"
    style={{ 
      marginRight: 20
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="13" ry="13" width="140" height="140" /> 
    <Rect x="0" y="150" rx="7" ry="7" width="109" height="14" />
  </ContentLoader>
)

export default LoaderRecentRecipe