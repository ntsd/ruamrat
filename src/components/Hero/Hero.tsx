import Image from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
import {GoDownButton} from '../GoDownButton/GoDownButton';
import './Hero.scss';

interface HeroProps {
  children: never[];
}

export const Hero = ({children}: HeroProps) => {
  const data = useStaticQuery(graphql`
    query indexQuery {
      hero: file(relativePath: {eq: "header.jpeg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="hero-container">
      <Image className="image" fluid={data.hero.childImageSharp.fluid} />
      <div className="overlay">
        {children}
        <GoDownButton></GoDownButton>
      </div>
    </div>
  );
};
