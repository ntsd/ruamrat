import React from 'react';

import {Section} from '../../components/Section/Section';
import {
  DescriptionCard,
  DescriptionCardProps,
} from '../../components/DescriptionCard/DescriptionCard';
import './ServicesSection.scss';
import {useStaticQuery, graphql} from 'gatsby';
import {Image} from '../../components/Image/Image';
import {Parallax} from '../../components/Parallax/Parallax';

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
    title: 'บริการ',
    description: (
      <>
        - กระจกอลูมิเนียม <br></br>- มุ้งลวด, มุ้งพับจีบ, มุ้งบานเลื่อน
        <br></br>- เหล็กดัด, อลูมิเนียมเส้น <br></br>- ผ้าม่านจีบ, ผ้าม่านตาไก่
        <br></br>- อุปกรณ์ สำหรับงานกระจกและอลูมิเนียม <br></br>- บริการติดตั้ง
        จำหน่าย และ ผลิต
      </>
    ),
  };

  return (
    <Section id="services">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <Image
              withFrame
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </div>
          <div className="col-xl-5" style={{paddingTop: '10vh'}}>
            <Parallax y={[-30, 30]}>
              <DescriptionCard {...homeDescription} longDescription />
            </Parallax>
          </div>
        </div>
      </div>
    </Section>
  );
};
