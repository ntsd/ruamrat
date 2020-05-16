import React from 'react'
import "./Section.css"

interface SectionProps {}

export const Section: React.FC<SectionProps> = ({ children }) => (
  <section className="section">
    { children }
  </section>
)
