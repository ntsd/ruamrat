import './Spotlight.scss';

export interface SpotlightProps {
  style?: React.CSSProperties;
  contentPosition: 'bottom' | 'top' | 'left' | 'right';
  children: JSX.Element | JSX.Element[];
}

export const Spotlight = ({
  children,
  style,
  contentPosition,
}: SpotlightProps) => {
  return (
    <div className={`spotlight ${contentPosition}`} style={style}>
      <div className="content">{children}</div>
    </div>
  );
};
