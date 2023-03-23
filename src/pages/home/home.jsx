import Faqs from '../../component/faqs/faqs';
import Header from '../../component/header/header';
import Programs from '../../component/programs/programs';
import Testimonials from '../../component/testimonials/testimonials';
import Values from '../../component/values/values';
import * as S from './home.style';

const Home = () => {
  return (
    <S.Home>
      <Header />
      <Programs />
      <Values />
      <Faqs />
      <Testimonials />
    </S.Home>
  );
};

export default Home;
