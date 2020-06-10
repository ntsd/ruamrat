import React from 'react';
import Img from 'gatsby-image';
import './Image.css';

interface ImageProps {
  withFrame?: boolean;
  fluid: any;
  style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = ({
  withFrame = false,
  fluid,
  style,
}) => {
  return (
    <Img
      className={`${withFrame && 'img-frame'}`}
      fluid={fluid}
      style={style}
      alt="รวงมรัตน์ กระจก อลูมิเนียม"
    />
  );
};
