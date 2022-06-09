import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const LoaderBahan = (props) => (
  <ContentLoader 
    speed={2}
    width={290}
    height={220}
    viewBox="0 0 290 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="4" rx="7" ry="7" width="270" height="20" /> 
    <Rect x="0" y="38" rx="7" ry="7" width="250" height="18" /> 
    <Rect x="0" y="69" rx="7" ry="7" width="280" height="17" /> 
    <Rect x="0" y="99" rx="7" ry="7" width="262" height="15" /> 
    <Rect x="0" y="129" rx="7" ry="7" width="279" height="16" />
    <Rect x="0" y="160" rx="7" ry="7" width="279" height="16" />
    <Rect x="0" y="190" rx="7" ry="7" width="279" height="16" />
    <Rect x="0" y="220" rx="7" ry="7" width="279" height="16" />
  </ContentLoader>
)

export default LoaderBahan