import React from 'react'

import { Section } from "../../components/Section/Section"
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from '../../components/Image/Image'
import './HomeSection.css'
import { Button } from '../../components/Button/Button'

export const HomeSection: React.FC = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { name: { eq: "header" }, sourceInstanceName: { eq: "images"}}) {
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
    <a target="_blank" rel="noopener noreferrer" href="https://lin.ee/2GVWsmiLd"><Button>Tel: 099-4916588</Button></a>
    <a target="_blank" rel="noopener noreferrer" href="https://lin.ee/2GVWsmiLd"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36"></img></a>
    </>
  )

  const homeDescription: DescriptionCardProps = {
    title: 'รับติดตั้ง กระจกและอลูมิเนียม',
    description: 'รับผลิต-ติดตั้ง กระจกอลูมิเนียม, มุ้งพับจีบ, มุ้งบานเลื่อน, เหล็กดัด ผลิตและติดตั้งโดยทีมช่างมืออาชีพ ชัดเจน จริงใจ ไม่เอาเปรียบลูกค้า โดย บริษัท รวมรัตน์ เอ็นจิเนียริ่ง แอนด์ ซัพพลาย จำกัด',
    footer: homeDescriptionFooter
  }

  return (
    <Section>
      <div className="home-container">
        <div className="item1">
          <DescriptionCard { ...homeDescription }/>
        </div>
        <div className="item2">
          <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </div>
      </div>
    </Section>
  )
}
