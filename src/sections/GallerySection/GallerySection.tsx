import React, {useState} from 'react';

import {Section} from '../../components/Section/Section';
import {useStaticQuery, graphql} from 'gatsby';
import {DescriptionCard} from '../../components/DescriptionCard/DescriptionCard';
import {Button} from '../../components/Button/Button';
import './GallerySection.css';
import {CATAGORIES} from './Gallery.json';
import {Grid} from '../../components/Grid/Grid';
import {Image} from '../../components/Image/Image';
import {IndexCard} from '../../components/IndexCard/IndexCard';

export const GallerySection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      gridImages: allFile(
        filter: {
          name: {regex: "/page-[0-9]-grid-*/"}
          extension: {regex: "/(jpeg|jpg|gif|png)/"}
          sourceInstanceName: {eq: "images"}
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allThumbImages: allFile(
        filter: {
          name: {regex: "/thumb/"}
          extension: {regex: "/(jpeg|jpg|gif|png)/"}
          sourceInstanceName: {eq: "images"}
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allLargeImages: allFile(
        filter: {
          name: {regex: "/large/"}
          extension: {regex: "/(jpeg|jpg|gif|png)/"}
          sourceInstanceName: {eq: "images"}
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const [page, setPage] = useState(0);

  const incrementPage = () => {
    if (page < CATAGORIES.length - 1) setPage(page + 1);
  };

  const decrementPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const getPage: any = () => {
    return page < CATAGORIES.length ? CATAGORIES[page] : 'dummy';
  };

  const getThumbImage: any = () => {
    return (
      data.allThumbImages.edges.find((image: {node: {name: string}}) => {
        return image.node.name === `page-${page + 1}-thumb`;
      }) ||
      data.allThumbImages.edges.find((image: {node: {name: string}}) => {
        return image.node.name === 'page-1-thumb';
      })
    );
  };

  const getLargeImage: any = () => {
    return (
      data.allLargeImages.edges.find((image: {node: {name: string}}) => {
        return image.node.name === `page-${page + 1}-large`;
      }) ||
      data.allLargeImages.edges.find((image: {node: {name: string}}) => {
        return image.node.name === 'page-1-large';
      })
    );
  };

  return (
    <Section id="gallery">
      <div style={{textAlign: 'center', marginTop: '2vw', marginBottom: '2vw'}}>
        <h1 className="title">ผลงานของเรา</h1>
      </div>
      <div className="collection-page-container">
        <div className="thumb-container">
          <Image fluid={getThumbImage().node.childImageSharp.fluid} />
          <IndexCard index={page + 1} title={getPage().title} />
        </div>

        <div className="large">
          <Image fluid={getLargeImage().node.childImageSharp.fluid} />
        </div>

        <div className="card">
          <DescriptionCard
            longDescription
            title={getPage().title}
            description={getPage().description}
          />
        </div>

        <div className="btn-container">
          <Button
            type="secondary"
            style={{fontSize: '2em'}}
            onClick={decrementPage}
          >
            ←
          </Button>
          <Button
            type="secondary"
            style={{fontSize: '2em'}}
            onClick={incrementPage}
          >
            →
          </Button>
        </div>

        <div className="image-grid">
          <Grid items={data.gridImages.edges} pageNumber={page + 1} />
        </div>
      </div>
    </Section>
  );
};
