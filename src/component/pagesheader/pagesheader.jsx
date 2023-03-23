import * as S from './pagesheader.style';

const PagesHeader = ({ title, image, children }) => {
  return (
    <S.PagesHeader>
      <S.Container>
        <S.Image>
          <img src={image} alt='header background' />
        </S.Image>
        <S.Content>
          <h2>{title}</h2>
          <p>{children}</p>
        </S.Content>
      </S.Container>
    </S.PagesHeader>
  );
};

export default PagesHeader;
