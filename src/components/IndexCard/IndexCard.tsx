import './IndexCard.css';

interface IndexCardProps {
  title: string;
  index: number;
}

export const IndexCard = ({title, index}: IndexCardProps) => {
  function beautifyNumber(index: number) {
    return index < 10 ? `0${index}` : index;
  }

  return (
    <div className="index-card-container">
      <span className="index-card-title">{title}</span>
      <span className="index-card-index">{beautifyNumber(index)}</span>
    </div>
  );
};
