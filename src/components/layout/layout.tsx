import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Navigation } from '../Navigation/Navigation'
import './layout.scss'
import { Footer } from '../Footer/Footer'

interface LayoutProps {
  children: JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
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
        { children }
        <Footer/>
      </>
    )}
  />
)
