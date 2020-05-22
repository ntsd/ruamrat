import React from 'react';
import './DescriptionCard.css';

export interface DescriptionCardProps {
  title: string;
  title2?: string;
  description: any;
  descriptionLong?: boolean;
  noCrown?: boolean;
  titleStyle?: object;
  footer?: any;
  style?: React.CSSProperties;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, title2, description, noCrown, footer, titleStyle, style, descriptionLong = false }) => {
  return (
    <div className="card-container" style={style}>
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      {
        title2 &&
        <h1 className="title" style={titleStyle}> {title2} </h1>
      }
      <p className={descriptionLong ? 'description-long' : 'description'}>{description}</p>
      <div className="footer">{ footer }</div>
    </div>
  )
}
