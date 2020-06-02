import React from 'react';
import './Spotlight.scss';

export interface SpotlightProps {
  style?: React.CSSProperties;
  contentPosition: 'bottom' | 'top' | 'left' | 'right';
}

export const Spotlight: React.FC<SpotlightProps> = ({
  children,
  style,
  contentPosition,
}) => {
  return (
    <div className={`spotlight ${contentPosition}`} style={style}>
      <div className="content">{children}</div>
    </div>
  );
};
