import * as S from './programs.style';
import SectionHead from '../sectionhead/sectionhead';
import { GiCrown } from 'react-icons/gi';
import { programs } from '../../data';
import Card from '../../ui/card';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

const Programs = () => {
  return (
    <S.Programs>
      <S.Container>
        <SectionHead icon={<GiCrown />} title='Programs' />

        <S.Wrapper>
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>
                  Learn More
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </S.Wrapper>
      </S.Container>
    </S.Programs>
  );
};

export default Programs;
