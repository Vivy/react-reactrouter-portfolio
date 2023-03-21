import * as S from './faq.style';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [showing, setShowing] = useState(false);

  return (
    <S.Faq onClick={() => setShowing(!showing)}>
      <div>
        <h4>{question}</h4>
        <button>{showing ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>
      {showing && <p>{answer}</p>}
    </S.Faq>
  );
};

export default Faq;
