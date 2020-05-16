import React from 'react';
import ButtonArrow from '../ButtonArrow';
import './DescriptionCard.scss';
import { navigate } from 'gatsby';

export interface DescriptionCardProps {
  title: string;
  description: string;
  noCrown?: boolean;
  longDescription?: boolean;
  noButton?: boolean;
  titleStyle?: object;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ noCrown, noButton, longDescription, titleStyle, title, description }) => {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      <p className={`description ${longDescription && 'description-long'}`}>{description}</p>
      {
        !noButton &&
        <ButtonArrow className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Collections → </ButtonArrow>
      }
    </div>
  )
}
