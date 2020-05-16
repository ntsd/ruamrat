import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Navigation } from '../Navigation/Navigation'
import './Layout.scss'
import { Footer } from '../Footer/Footer'
import { ContactFab } from '../ContactFab/ContactFab'

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
      <Navigation siteTitle={data.site.siteMetadata.title} />
      { children }
      <Footer/>
      <ContactFab/>
    </>
  )
}
