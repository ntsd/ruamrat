import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Navigation } from '../Navigation/Navigation'
import './Layout.scss'
import { Footer } from '../Footer/Footer'

interface LayoutProps {
  children: JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <>
      <div style={{marginBottom: '140px'}}>
        <Navigation siteTitle={data.site.siteMetadata.title} />
      </div>
      { children }
      <Footer/>
    </>
  )
}
