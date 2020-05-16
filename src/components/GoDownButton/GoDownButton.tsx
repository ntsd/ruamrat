import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components';
import ArrowSrc from './arrow.svg';


const ScrollLinkGoDown = styled(ScrollLink)`
  border: 0;
  bottom: 0;
  display: block;
  height: 5em;
  left: 50%;
  margin: 0 0 0 -5em;
  overflow: hidden;
  position: absolute;
  text-indent: 10em;
  white-space: nowrap;
  width: 10em;
  z-index: 1;
  cursor: pointer;

  &:before {
    background-image: url(${ArrowSrc});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 1.5em;
    left: 50%;
    margin: -0.75em 0 0 -1em;
    position: absolute;
    top: 50%;
    width: 2em;
    z-index: 1;
  }
`

export const GoDownButton: React.FC<{}> = () => (
  <ScrollLinkGoDown
    to="two"
    activeClass="active"
    smooth={true}
    offset={50}
    duration={1500}
    spy={true}
  >
    Next
  </ScrollLinkGoDown>
);
