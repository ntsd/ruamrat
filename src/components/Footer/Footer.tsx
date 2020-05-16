import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer style={{textAlign: 'center'}}>
      Copyright © {new Date().getFullYear()} <a href="https://hotcode.dev">Hotcode</a>
    </footer>
  )
}
