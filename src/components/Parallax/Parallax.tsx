import React, {useState, useEffect, EffectCallback} from 'react';
import {Parallax as ReactParallax, ParallaxProps} from 'react-scroll-parallax';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const Parallax: React.FC<ParallaxProps> = (props: ParallaxProps) => {
  const isClient = typeof window === 'object';

  const getSize: () => WindowSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const getDisable: (size: WindowSize) => boolean = (size: WindowSize) => {
    if (size.width) {
      return size.width < 1025;
    } else {
      return true;
    }
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(
    (() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }) as EffectCallback,
    []
  );

  return (
    <ReactParallax {...props} disabled={getDisable(windowSize)}></ReactParallax>
  );
};
