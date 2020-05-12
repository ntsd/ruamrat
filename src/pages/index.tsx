import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { Seo } from '../components/seo/seo'
import { Hero } from '../components/hero/hero'
import { Section } from '../components/section/section'

const IndexPage = ({}) => {
  const data = useStaticQuery(graphql`
    query indexQuery {
      hero: file(relativePath: { eq: "header.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="รวมรัตน์" description="ติดตั้ง ผลิต กระจก อลูมิเนียม" keywords={[`รวมรัตน์`, `กระจกอลูมิเนียม`, `ติดตั้งกระจกอลูมิเนียม`]} />
      <Hero fluid={data.hero.childImageSharp.fluid}>
      </Hero>
      <Section>
      </Section>
      <Section>
      </Section>
    </Layout>
  )
}

export default IndexPage
