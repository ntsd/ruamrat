import React, { useLayoutEffect } from 'react'
import './Navigation.css'
import { Link } from 'react-scroll/modules';

interface NavigationProps {
  siteTitle: string;
}

export const Navigation: React.FC<NavigationProps> = (siteTitle) => {

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
        <div className="logo">รวมรัตน์</div>
        <nav>
          <Link
            activeClass="active"
            to="homeSection"
            spy={true}
            smooth={true}
            duration={800}
          >หน้าแรก</Link>
          <Link
            activeClass="active"
            to="servicesSection"
            spy={true}
            smooth={true}
            duration={800}
          >บริการ</Link>
          <a href="#portfolio">ผลงาน</a>
          <a href="#contact">ติดต่อเรา</a>
        </nav>
      </div>
    </div>
  )
}
