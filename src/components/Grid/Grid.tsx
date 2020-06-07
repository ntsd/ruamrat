import React from 'react';
import Img from 'gatsby-image';
import './Grid.css';

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

interface GridProps {
  items: any[];
  pageNumber: number;
}

export const Grid: React.FC<GridProps> = ({items, pageNumber}) => {
  shuffle(items);

  return (
    <div className="grid-container">
      {items
        .filter(({node}) =>
          node.childImageSharp.fluid.src.includes(`page-${pageNumber}-grid`)
        )
        .map(({node}) => {
          return (
            <GridItem key={node.childImageSharp.fluid.src}>
              <Img fluid={node.childImageSharp.fluid} />
            </GridItem>
          );
        })}
    </div>
  );
};

export const GridItem: React.FC = ({children}) => {
  return <div className="grid-item">{children}</div>;
};
