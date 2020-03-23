import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Section from '../components/section'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="รวมรัตน์" keywords={ [`รวมรัตน์`, `กระจกอลูมิเนียม`, `ติดตั้งกระจกอลูมิเนียม`] } />
    <Hero fluid={ data.hero.childImageSharp.fluid }>
    </Hero>
    <Section>test
    </Section>
    <Section>test
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    hero: file(relativePath: { eq: "header.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
