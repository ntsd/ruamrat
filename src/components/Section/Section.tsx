import React from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  style,
  className = '',
}) => (
  <section id={id} className={className + ' section'} style={style}>
    {children}
  </section>
);
