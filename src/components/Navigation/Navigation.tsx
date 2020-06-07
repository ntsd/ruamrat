import React, {useLayoutEffect} from 'react';
import './Navigation.css';
import {Link} from 'react-scroll/modules';

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
  useLayoutEffect(() => {
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
        <div className="logo">{siteTitle}</div>
        <nav>
          {sectionLinks.map((sectionLink: SectionLinks) => (
            <Link
              activeClass="active"
              to={sectionLink.link}
              spy={true}
              smooth={true}
              duration={800}
              key={sectionLink.link}
            >
              {sectionLink.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
