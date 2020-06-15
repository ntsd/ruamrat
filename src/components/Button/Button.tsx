import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style?: React.CSSProperties,
  size?: 'large' | 'small',
  className?: string,
  type?: 'primary' | 'secondary' | 'link',
  children?: any,
}

export const Button: React.FC<ButtonProps> = ({ onClick, type, style, size, className, children }) => {
  return (
    <button
      className={[
        'Button',
        className ? className : '',
        type ? `Button-${type}` : '',
        size ? `Button-${size}` : ''
      ].join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
