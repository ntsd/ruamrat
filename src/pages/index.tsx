import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
import { HomeSection } from '../sections/HomeSection/HomeSection'
import { ServicesSection } from '../sections/ServicesSection/ServicesSection'
import { Section } from '../components/Section/Section'

const IndexPage = ({}) => {
  return (
    <Layout>
      <Seo title="รวมรัตน์" description="ติดตั้ง ผลิต กระจก อลูมิเนียม" keywords={[`รวมรัตน์`, `กระจกอลูมิเนียม`, `ติดตั้งกระจกอลูมิเนียม`]} />
      <HomeSection/>
      <ServicesSection/>
    </Layout>
  )
}

export default IndexPage
