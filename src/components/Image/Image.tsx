import React from 'react'
import Img from 'gatsby-image'
import './Image.css'


interface ImageProps {
  withFrame: boolean;
  fluid: any;
}

export const Image: React.FC<ImageProps> = ({ withFrame, fluid }) => {
  return <Img className={`${withFrame && 'img-frame'}`} fluid={ fluid } />
}
