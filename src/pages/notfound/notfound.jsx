import * as S from './notfound.style';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.Container>
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>
          Go Back Home
        </Link>
      </S.Container>
    </S.NotFound>
  );
};

export default NotFound;
