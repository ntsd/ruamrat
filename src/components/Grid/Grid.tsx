import React from 'react';
import {Image} from '../../components/Image/Image';
import './Grid.css';
import {Parallax} from '../Parallax/Parallax';

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
          const y_top = randomInteger(-5, 0);
          const y_bottom = randomInteger(0, 70);
          return (
            <Parallax
              y={[y_top, y_bottom]}
              key={node.childImageSharp.fluid.src}
            >
              <GridItem>
                <Image fluid={node.childImageSharp.fluid} />
              </GridItem>
            </Parallax>
          );
        })}
    </div>
  );
};

export const GridItem: React.FC = ({children}) => {
  return <div className="grid-item">{children}</div>;
};
