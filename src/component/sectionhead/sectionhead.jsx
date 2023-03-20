import { GiCrown } from 'react-icons/gi';
import * as S from './sectionhead.style';

const SectionHead = ({ icon, title, className }) => {
  return (
    <S.SectionHead className={`${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </S.SectionHead>
  );
};

export default SectionHead;
