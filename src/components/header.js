import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './header.css'
import React, { Component } from 'react'

export default class Header extends Component {
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
      <div class="cbp-af-header">
        <div class="cbp-af-inner">
          <h1>รวมรัตน์</h1>
          <nav>
            <a href="#">หน้าแรก</a>
            <a href="#">เกี่ยวกับเรา</a>
            <a href="#">บริการของเรา</a>
            <a href="#">ผลงาน</a>
            <a href="#">ติดต่อเรา</a>
          </nav>
        </div>
      </div>
    )
  }
}
