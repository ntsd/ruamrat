import {Link as ScrollLink} from 'react-scroll';
import './GoDownButton.scss';

export const GoDownButton = () => (
  <ScrollLink
    to="two"
    activeClass="active"
    smooth={true}
    offset={50}
    duration={1500}
    spy={true}
    className="godown-button"
  >
    Next
  </ScrollLink>
);
