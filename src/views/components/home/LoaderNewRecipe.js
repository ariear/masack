import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderNewRecipe = (props) => (
    <ContentLoader 
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#DDDDDD"
      foregroundColor="#ecebeb"
      style={{ 
        marginRight: 20
       }}
      {...props}
    >
      <Rect x="3" y="1" rx="15" ry="15" width="300" height="191" /> 
      <Rect x="0" y="203" rx="7" ry="7" width="300" height="23" /> 
      <Rect x="1" y="246" rx="7" ry="7" width="164" height="20" />
    </ContentLoader>
  )

  export default LoaderNewRecipe