import * as S from './values.style';
import Image from '/images/values.jpg';
import { values } from '../../data';
import Card from '../../ui/card';
import { GiCutDiamond } from 'react-icons/gi';
import SectionHead from '../sectionhead/sectionhead';

const Values = () => {
  return (
    <S.Values>
      <S.Container>
        <S.Left>
          <S.ValuesImage>
            <img src={Image} alt='values image' />
          </S.ValuesImage>
        </S.Left>
        <S.Right>
          <SectionHead icon={<GiCutDiamond />} title='Values' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            dolorem voluptatem debitis?
          </p>
          <S.Wrapper>
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className='values__value' key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </S.Wrapper>
        </S.Right>
      </S.Container>
    </S.Values>
  );
};

export default Values;
