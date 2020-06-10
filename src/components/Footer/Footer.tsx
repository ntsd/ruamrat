import React from 'react';
import {FacebookPage} from '../FacebookPage/FacebookPage';
import {Section} from '../Section/Section';
import {SectionLinks} from '../Navigation/Navigation';
import {Link} from 'gatsby';
import './Footer.scss';

interface FooterProps {
  sectionLinks: SectionLinks[];
}

export const Footer: React.FC<FooterProps> = ({sectionLinks}) => {
  return (
    <Section id="footer" style={{minHeight: 'auto'}}>
      <div className="container footer-container">
        <div className="row" style={{textAlign: 'center'}}>
          <div className="col-sm-6" style={{paddingTop: '60px'}}>
            <h2>Links</h2>
            {sectionLinks.map((sectionLink: SectionLinks) => (
              <Link to={'/#' + sectionLink.link} key={sectionLink.link}>
                <h3>{sectionLink.title}</h3>
              </Link>
            ))}
          </div>
          <div className="col-sm-6">
            <FacebookPage></FacebookPage>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            © {new Date().getFullYear()} by{' '}
            <a href="https://hotcode.dev">Hotcode</a>. All rights reserved.
          </div>
        </div>
      </div>
    </Section>
  );
};
