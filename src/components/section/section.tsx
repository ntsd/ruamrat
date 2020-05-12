import React from 'react'

interface SectionProps {
  children: JSX.Element[]
}

export const Section: React.FC<SectionProps> = ({ children }) => (
  <div style={{minHeight: '100vh', backgroundColor: 'black', color: '#fff'}}>
    { children }
  </div>
)
