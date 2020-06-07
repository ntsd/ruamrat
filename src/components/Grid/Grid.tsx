import React from 'react';
import Img from 'gatsby-image';
import './Grid.css';

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

interface GridProps {
  items: any[];
}

export const Grid: React.FC<GridProps> = ({items}) => {
  shuffle(items);

  return (
    <div className="grid-container">
      {items.map(({node, index}) => (
        <GridItem key={index}>
          <Img fluid={node.childImageSharp.fluid} />
        </GridItem>
      ))}
    </div>
  );
};

export const GridItem: React.FC = ({children}) => {
  return <div className="grid-item">{children}</div>;
};
