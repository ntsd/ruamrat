import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            Copyright © {new Date().getFullYear()} <a href="https://hotcode.dev">Hotcode</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
