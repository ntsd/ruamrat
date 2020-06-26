import React from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
  snap?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  style,
  className = '',
  snap = false,
}) => (
  <section
    id={id}
    className={'section ' + (snap ? 'snap ' : '') + className}
    style={style}
  >
    {children}
  </section>
);
