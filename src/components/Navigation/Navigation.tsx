import React, {useEffect} from 'react';
import './Navigation.css';
import {Link as ScrollLink} from 'react-scroll/modules';
import {Link} from 'gatsby';

export interface SectionLinks {
  title: string;
  link: string;
}

interface NavigationProps {
  siteTitle: string;
  sectionLinks: SectionLinks[];
}

export const Navigation: React.FC<NavigationProps> = ({
  siteTitle,
  sectionLinks,
}) => {
  useEffect(() => {
    const docElem = document.documentElement;
    const header = document.getElementsByClassName('cbp-af-header')[0];
    let didScroll = false;
    const changeHeaderOn = 90;

    function init() {
      window.addEventListener(
        'scroll',
        () => {
          if (!didScroll) {
            didScroll = true;
            scrollPage();
          }
        },
        false
      );
    }

    function scrollPage() {
      const sy = scrollY();
      if (sy >= changeHeaderOn) {
        header.classList.add('cbp-af-header-shrink');
      } else {
        header.classList.remove('cbp-af-header-shrink');
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();
  });

  return (
    <div className="cbp-af-header">
      <div className="cbp-af-inner">
        <div className="logo">
          <Link to="/">{siteTitle}</Link>
        </div>
        <nav>
          {sectionLinks.map((sectionLink: SectionLinks) => (
            <ScrollLink
              activeClass="active"
              to={sectionLink.link}
              spy={true}
              smooth={true}
              duration={800}
              key={sectionLink.link}
            >
              {sectionLink.title}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
