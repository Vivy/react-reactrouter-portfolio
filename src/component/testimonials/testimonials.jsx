import * as S from './testimonials.style';
import SectionHead from '../sectionhead/sectionhead';
import { ImQuotesLeft } from 'react-icons/im';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { testimonials } from '../../data';
import Card from '../../ui/card';
import { useState } from 'react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevHandleClick = () => {
    setIndex(index - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextHandleClick = () => {
    setIndex(index + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <S.Testimonials>
      <S.Container>
        <SectionHead
          icon={<ImQuotesLeft />}
          title='Testimonials'
          className='testimonials__head'
        />
        <Card className='testimonials'>
          <S.Avatar>
            <img src={avatar} alt={name} />
          </S.Avatar>
          <p>{quote}</p>
          <h5>{name}</h5>
          <small>{job}</small>
        </Card>
        <S.ButtonWrapper>
          <button onClick={prevHandleClick}>
            <IoIosArrowDropleftCircle />
          </button>
          <button onClick={nextHandleClick}>
            <IoIosArrowDroprightCircle />
          </button>
        </S.ButtonWrapper>
      </S.Container>
    </S.Testimonials>
  );
};

export default Testimonials;
