import React from 'react'

import { Section } from '../../components/Section/Section'
import { Spotlight } from '../../components/Spotlight/Spotlight'
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'
import './ServicesSection.scss'
import servicesPic from '../../images/gallery/28893.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from '../../components/Image/Image'

export const ServicesSection: React.FC = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "28929" }, sourceInstanceName: { eq: "images"}}) {
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
  `)

  const homeDescription: DescriptionCardProps = {
    title: 'บริการของเรา',
    description: <>
      - กระจกอลูมิเนียม <br></br>
      - มุ้งลวด, มุ้งพับจีบ, มุ้งบานเลื่อน  <br></br>
      - เหล็กดัด และ อลูมิเนียมเส้น <br></br>
      - ผ้าม่าน <br></br>
      - อุปกรณ์ สำหรับงานกระจก และ อลูมิเนียม <br></br>
      - บริการติดตั้ง จำหน่าย และ ผลิต
    </>
  }

  return (
    <Section id="services">
      <Spotlight contentPosition="bottom" style={{ backgroundImage: `url(${servicesPic})` }}>
        <div className="row">
          <div className="col-xl-6" style={{marginTop: '-10vh'}}>
            <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
          </div>
          <div className="col-xl-6">
            <DescriptionCard { ...homeDescription } descriptionLong={true} style={{padding: '32px'}}/>
          </div>
        </div>
      </Spotlight>
    </Section>
  )
}