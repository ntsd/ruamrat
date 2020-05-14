import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { Seo } from '../components/seo/seo'
import { Hero } from '../components/hero/hero'
import { Section } from '../components/section/section'

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
