import Img from 'gatsby-image';
import './Image.css';

interface ImageProps {
  withFrame?: boolean;
  fluid: any;
  style?: React.CSSProperties;
}

export const Image = ({withFrame = false, fluid, style}: ImageProps) => {
  return (
    <Img
      className={`${withFrame && 'img-frame'}`}
      fluid={fluid}
      style={style}
      title="รวมรัตน์ กระจกอลูมิเนียม กระจก อลูมิเนียม"
      alt="รวมรัตน์ กระจกอลูมิเนียม กระจก อลูมิเนียม"
    />
  );
};
