import React from 'react';
import {Parallax as ReactParallax, ParallaxProps} from 'react-scroll-parallax';

export const Parallax: React.FC<ParallaxProps> = (props: ParallaxProps) => {
  props = Object.assign({disabled: window.innerWidth < 1025}, props);
  return <ReactParallax {...props}></ReactParallax>;
};
