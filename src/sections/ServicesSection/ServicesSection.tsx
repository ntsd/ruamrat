import React from 'react'

import { Section } from '../../components/Section/Section'
import { Spotlight } from '../../components/Spotlight/Spotlight'
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'
import './ServicesSection.scss'
import servicesPic from '../../images/services-section.jpg'

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
      <Spotlight contentPosition="bottom" style={{ backgroundImage: `url(${servicesPic})` }}>
        <DescriptionCard { ...homeDescription } descriptionLong={true} style={{padding: '32px'}}/>
      </Spotlight>
    </Section>
  )
}
