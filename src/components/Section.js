import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children }) => (
  <div style={{minHeight: '100vh', backgroundColor: 'black'}}>
    {children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
