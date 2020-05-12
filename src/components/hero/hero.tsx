import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));
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

interface HeroProps {
  height?: string;
  fit?: string;
  position?: string;
  children: never[];
  fluid: any;
}

export class Hero extends React.Component<HeroProps> {
  render() {
    const { children } = this.props

    const BgImage = styled(Image)`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      height: ${ this.props.height || '100vh' };
      & > img {
        object-fit: ${ this.props.fit || 'cover' } !important;
        object-position: ${ this.props.position || '50% 50%' } !important;
      }
    `

    return (
      <Container>
        <BgImage { ...this.props }/>
        <Overlay>
          { children }
        </Overlay>
      </Container>
    )
  }
}
