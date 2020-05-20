import React from 'react';
import './DescriptionCard.css';

export interface DescriptionCardProps {
  title: string;
  title2?: string;
  description: any;
  noCrown?: boolean;
  titleStyle?: object;
  footer?: any;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, title2, description, noCrown, footer, titleStyle }) => {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      {
        title2 &&
        <h1 className="title" style={titleStyle}> {title2} </h1>
      }
      <p className='description'>{description}</p>
      <div className="footer">{ footer }</div>
    </div>
  )
}
