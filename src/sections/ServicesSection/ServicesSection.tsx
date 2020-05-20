import React from 'react'

import { Section } from '../../components/Section/Section'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from '../../components/Image/Image'
import './ServicesSection.scss'
import pic02 from '../../images/28852.jpg'
import { Spotlight } from '../../components/Spotlight/Spotlight'
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'

export const ServicesSection: React.FC = () => {

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
      <Spotlight contentPosition="bottom" style={{ backgroundImage: `url(${pic02})` }}>
        <DescriptionCard { ...homeDescription } style={{padding: '16px 32px'}}/>
      </Spotlight>
    </Section>
  )
}
