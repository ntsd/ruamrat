import React from 'react';
import './DescriptionCard.css';

export interface DescriptionCardProps {
  title: string;
  description: string;
  noCrown?: boolean;
  titleStyle?: object;
  footer?: any;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description, noCrown, footer, titleStyle }) => {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      <p className='description'>{description}</p>
      { footer }
    </div>
  )
}
