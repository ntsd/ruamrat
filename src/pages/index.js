import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import Section from '../components/Section'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="รวมรัตน์" keywords={[`รวมรัตน์`, `กระจกอลูมิเนียม`, `ติดตั้งกระจกอลูมิเนียม`]} />
    <Hero fluid={data.hero.childImageSharp.fluid}>
    </Hero>
    <Section>
    </Section>
    <Section>
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