import * as S from './faqs.style';
import SectionHead from '../sectionhead/sectionhead';
import { faqs } from '../../data';
import { FaQuestion } from 'react-icons/fa';
import Faq from '../faq/faq';

const Faqs = () => {
  return (
    <S.Faqs>
      <S.Container>
        <SectionHead icon={<FaQuestion />} title='FAQs' />
        <S.Wrapper>
          {faqs.map(({ id, question, answer }) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}
        </S.Wrapper>
      </S.Container>
    </S.Faqs>
  );
};

export default Faqs;
