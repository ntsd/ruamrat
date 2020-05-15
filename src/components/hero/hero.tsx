import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import './hero.scss'
import { GoDownButton } from '../godown-button/godown-button'


const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
`

const Overlay = styled.div`
  width:80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  display:flex;
  justify-content:center;
  align-items: center;
  text-align: center;
`

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${ (props: HeroProps) => props.height || '100vh' };
  & > img {
    object-fit: ${ (props: HeroProps) => props.fit || 'cover' } !important;
    object-position: ${ (props: HeroProps) => props.position || '50% 50%' } !important;
  }
`

interface HeroProps {
  height?: string;
  fit?: string;
  position?: string;
  children: never[];
}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { children } = props;

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
    <Container>
      <BgImage { ...props } fluid={data.hero.childImageSharp.fluid}/>
      <Overlay>
        { children }
        <GoDownButton></GoDownButton>
      </Overlay>
    </Container>
  )
}
