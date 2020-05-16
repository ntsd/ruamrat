import React from 'react'


interface SectionProps {}

export const Section: React.FC<SectionProps> = ({ children }) => (
  <div style={{minHeight: '100vh', backgroundColor: 'black', color: '#fff'}}>
    { children }
  </div>
)
