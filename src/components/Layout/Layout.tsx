import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Navigation, SectionLinks} from '../Navigation/Navigation';
import './Layout.scss';
import {Footer} from '../Footer/Footer';
import {ContactFab} from '../ContactFab/ContactFab';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          brand
        }
      }
    }
  `);

  const sectionLinks: SectionLinks[] = [
    {
      title: 'หน้าหลัก',
      link: 'home',
    },
    {
      title: 'บริการ',
      link: 'services',
    },
    // {
    //   title: 'ผลงาน',
    //   link: 'gallery'
    // },
    {
      title: 'ติดต่อ',
      link: 'contact',
    },
  ];

  return (
    <>
      <Navigation
        siteTitle={data.site.siteMetadata.brand}
        sectionLinks={sectionLinks}
      />
      {children}
      <Footer />
      <ContactFab />
    </>
  );
};
