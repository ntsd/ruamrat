import React from 'react';

import {Section} from '../../components/Section/Section';
import {
  DescriptionCard,
  DescriptionCardProps,
} from '../../components/DescriptionCard/DescriptionCard';
import './ServicesSection.scss';
import {useStaticQuery, graphql} from 'gatsby';
import {Image} from '../../components/Image/Image';
import {Parallax} from 'react-scroll-parallax';

export const ServicesSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {name: {eq: "28929"}, sourceInstanceName: {eq: "images"}}
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 570) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const homeDescription: DescriptionCardProps = {
    title: 'บริการของเรา',
    description: (
      <>
        - กระจกอลูมิเนียม <br></br>- มุ้งลวด, มุ้งพับจีบ, มุ้งบานเลื่อน{' '}
        <br></br>- เหล็กดัด และ อลูมิเนียมเส้น <br></br>- ผ้าม่าน <br></br>-
        อุปกรณ์ สำหรับงานกระจก และ อลูมิเนียม <br></br>- บริการติดตั้ง จำหน่าย
        และ ผลิต
      </>
    ),
  };

  return (
    <Section id="services">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <Parallax y={[-20, 20]}>
              <Image
                withFrame
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              />
            </Parallax>
          </div>
          <div className="col-xl-5" style={{paddingTop: '10vh'}}>
            <DescriptionCard {...homeDescription} descriptionLong={true} />
          </div>
        </div>
      </div>
    </Section>
  );
};
