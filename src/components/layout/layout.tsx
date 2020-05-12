import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Navigation } from '../navigation/navigation'
import './layout.css'

export const Layout: React.FC<{children: JSX.Element[]}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          { children }
        </div>
        <footer style={{textAlign: 'center'}}>
          Copyright © {new Date().getFullYear()} <a href="https://hotcode.dev">Hotcode</a>
        </footer>
      </>
    )}
  />
)
