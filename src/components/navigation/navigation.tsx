import PropTypes from 'prop-types'
import './navigation.css'
import React from 'react'

export class Navigation extends React.Component {

  static propTypes = {
    siteTitle: PropTypes.string,
  }

  static defaultProps = {
    siteTitle: ``,
  }

  componentDidMount() {
    var docElem = document.documentElement,
      header = document.getElementsByClassName('cbp-af-header')[0],
      didScroll = false,
      changeHeaderOn = 300;

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
  }

  render() {
    return (
      <div className="cbp-af-header">
        <div className="cbp-af-inner">
          <h1>รวมรัตน์</h1>
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
}
