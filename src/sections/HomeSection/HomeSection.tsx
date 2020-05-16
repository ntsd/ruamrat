import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { RiLineLine, RiPhoneLine } from 'react-icons/ri'

import { Section } from "../../components/Section/Section"
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'
import { Image } from '../../components/Image/Image'
import { Button } from '../../components/Button/Button'
import './HomeSection.css'
import { GoDownButton } from '../../components/GoDownButton/GoDownButton'

export const HomeSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "home" }, sourceInstanceName: { eq: "images"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 780) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  
  const homeDescriptionFooter = (
    <>
      <a target="_blank" rel="noopener noreferrer" href="tel:0994916588">
        <Button size={'large'} style={{ backgroundColor: '#0000B9', color: '#fff' }}>
          <RiPhoneLine/>
          &nbsp;099-4916588
        </Button>
      </a>&nbsp;&nbsp;
      <a target="_blank" rel="noopener noreferrer" href="https://lin.ee/2GVWsmiLd">
        <Button size={'large'} style={{backgroundColor: '#00B900', color: '#fff'}}>
          <RiLineLine/>
          &nbsp;เพิ่มเพื่อน
        </Button>
      </a>
    </>
  )

  const homeDescription: DescriptionCardProps = {
    title: 'รับติดตั้ง กระจก',
    title2: 'และอลูมิเนียม',
    description: 'รับติดตั้ง-ผลิต กระจกอลูมิเนียม, มุ้งพับจีบ, มุ้งบานเลื่อน, เหล็กดัด ผลิตและติดตั้งโดยทีมช่างมืออาชีพ ชัดเจน จริงใจ ไม่เอาเปรียบลูกค้า โดย บริษัท รวมรัตน์ เอ็นจิเนียริ่ง แอนด์ ซัพพลาย จำกัด',
    footer: homeDescriptionFooter
  }

  return (
    <Section style={{height: 'calc(100vh - 140px)', minHeight:0}}>
      <div className="home-container">
        <div className="item1">
          <DescriptionCard { ...homeDescription }/>
        </div>
        <div className="item2">
          <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </div>
      </div>
      <GoDownButton></GoDownButton>
    </Section>
  )
}
