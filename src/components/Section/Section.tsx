import React from 'react'
import "./Section.css"

interface SectionProps {
  style?: React.CSSProperties;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, style, className = '' }) => (
  <section className={className + ' section'} style={style}>
    { children }
  </section>
)
