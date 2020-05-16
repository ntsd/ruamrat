import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style?: object,
  size?: 'large' | 'small',
  className?: string,
  type?: 'primary' | 'secondary' | 'link',
  children?: any,
}

export const Button: React.FC<ButtonProps> = ({ onClick, type, style, size, className, children }) => {
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
