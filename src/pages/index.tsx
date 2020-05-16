import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
import { Hero } from '../components/Hero/Hero'
import { Section } from '../components/Section/Section'

const IndexPage = ({}) => {
  return (
    <Layout>
      <Seo title="รวมรัตน์" description="ติดตั้ง ผลิต กระจก อลูมิเนียม" keywords={[`รวมรัตน์`, `กระจกอลูมิเนียม`, `ติดตั้งกระจกอลูมิเนียม`]} />
      <Hero>
      </Hero>
      <Section>
      </Section>
      <Section>
      </Section>
    </Layout>
  )
}

export default IndexPage
