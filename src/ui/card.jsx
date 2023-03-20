import * as S from './card.style';

const Card = ({ className, children }) => {
  return <S.Card className={`${className}`}>{children}</S.Card>;
};

export default Card;
