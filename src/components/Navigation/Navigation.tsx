import React, { useLayoutEffect } from 'react'
import './Navigation.css'
import { Link } from 'react-scroll/modules';

export interface SectionLinks {
  title: string;
  link: string;
}

interface NavigationProps {
  siteTitle: string;
  sectionLinks: SectionLinks[];
}

export const Navigation: React.FC<NavigationProps> = ({siteTitle, sectionLinks}) => {

  useLayoutEffect(() => {
    var docElem = document.documentElement,
      header = document.getElementsByClassName('cbp-af-header')[0],
      didScroll = false,
      changeHeaderOn = 90;

    function init() {
      window.addEventListener('scroll', function (event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        header.classList.add('cbp-af-header-shrink');
      }
      else {
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
          {
            sectionLinks.map((sectionLink: SectionLinks) => 
              <Link
                activeClass="active"
                to={sectionLink.link}
                spy={true}
                smooth={true}
                duration={800}
              >{sectionLink.title}</Link>
            )
          }
        </nav>
      </div>
    </div>
  )
}
