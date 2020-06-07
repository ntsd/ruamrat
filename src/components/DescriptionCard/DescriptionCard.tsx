import React from 'react';
import './DescriptionCard.css';

export interface DescriptionCardProps {
  title: string;
  title2?: string;
  description: any;
  longDescription?: boolean;
  noCrown?: boolean;
  titleStyle?: object;
  footer?: any;
  style?: React.CSSProperties;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  title2,
  description,
  noCrown,
  footer,
  titleStyle,
  style,
  longDescription = false,
}) => {
  return (
    <div className="card-container" style={style}>
      {!noCrown && <div className="horizontal-line" />}
      <h1 className="title" style={titleStyle}>
        <div>{title}</div>
        <div>{title2}</div>
      </h1>
      <p className={`description ${longDescription ? 'description-long' : ''}`}>
        {description}
      </p>
      <div className="footer">{footer}</div>
    </div>
  );
};
