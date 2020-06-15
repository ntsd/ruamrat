import {
  Parallax as ReactParallax,
  ParallaxProps as ReactParallaxProps,
} from 'react-scroll-parallax';
import {useEffect, useState, EffectCallback} from 'preact/hooks';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

interface ParallaxProps extends ReactParallaxProps {
  children: any;
}

export const Parallax = (props: ParallaxProps) => {
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
