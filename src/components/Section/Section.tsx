import './Section.css';

interface SectionProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
  snap?: boolean;
  children?: JSX.Element[] | JSX.Element;
}

export const Section = ({
  children,
  id,
  style,
  className = '',
  snap = true,
}: SectionProps) => (
  <section
    id={id}
    className={'section ' + (snap ? 'snap ' : '') + className}
    style={style}
  >
    {children}
  </section>
);
