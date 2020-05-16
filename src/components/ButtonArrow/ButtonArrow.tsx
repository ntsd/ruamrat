import React from 'react'
import './ButtonArrow.css'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style?: object,
  size?: string, // PropTypes.oneOf(['large', 'small'])
  className?: string,
  type?: string, // PropTypes.oneOf(['primary', 'secondary', 'link'])
  children?: any,
}

export const ButtonArrow: React.FC<ButtonProps> = ({ onClick, type, style, size, className, children }) => {
  return (
    <button
      className={`Button ${className} ${type && `Button-${type}`} ${size && `Button-${size}`}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
