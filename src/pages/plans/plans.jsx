import * as S from './plans.style';
import HeaderImage from '/images/header_bg_4.jpg';
import { plans } from '../../data';
import PagesHeader from '../../component/pagesheader/pagesheader';
import Card from '../../ui/card';

const Plans = () => {
  return (
    <>
      <PagesHeader title='Our Plans' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
        voluptatum ratione cum, consectetur veritatis nisi numquam id?
      </PagesHeader>
      <S.Plans>
        <S.Container>
          {plans.map(({ id, name, desc, price, features }) => (
            <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features.map(({ feature, available }, index) => (
                <S.Test key={index} available={available}>
                  {feature}
                </S.Test>
              ))}
              <button className='btn lg'>Choose Plan</button>
            </Card>
          ))}
        </S.Container>
      </S.Plans>
    </>
  );
};

export default Plans;
