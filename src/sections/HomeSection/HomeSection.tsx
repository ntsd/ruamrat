import React from 'react'

import { Section } from "../../components/Section/Section"
import { DescriptionCard, DescriptionCardProps } from '../../components/DescriptionCard/DescriptionCard'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from '../../components/Image/Image'
import './HomeSection.css'

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
  
  const homeDescription: DescriptionCardProps = {
    title: ' Fashion by Awesome Person',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
