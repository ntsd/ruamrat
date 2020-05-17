import React, { useLayoutEffect } from 'react'
import './Navigation.css'

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
          <a href="#home">หน้าแรก</a>
          <a href="#service">บริการ</a>
          <a href="#portfolio">ผลงาน</a>
          <a href="#contact">ติดต่อเรา</a>
        </nav>
      </div>
    </div>
  )
}
