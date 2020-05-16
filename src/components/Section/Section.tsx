import React from 'react'
import "./Section.css"

interface SectionProps {
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, style }) => (
  <section className="section" style={style} >
    { children }
  </section>
)
