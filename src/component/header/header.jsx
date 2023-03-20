import { Link } from 'react-router-dom';
import * as S from './header.style';
import Image from '/images/main_header.png';

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Left>
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends Of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ullam ab animi exercitationem necessitatibus id?
          </p>
          <Link to='/plans' className='btn btn.lg'>
            Get Started
          </Link>
        </S.Left>
        <S.Right>
          <div></div>
          <div>
            <img src={Image} alt='main header image' />
          </div>
        </S.Right>
      </S.Container>
    </S.Header>
  );
};

export default Header;
