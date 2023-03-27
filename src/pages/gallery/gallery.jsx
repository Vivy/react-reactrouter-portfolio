import PagesHeader from '../../component/pagesheader/pagesheader';
import * as S from './gallery.style';
import HeaderImage from '/images/header_bg_3.jpg';

const Gallery = () => {
  const length = 15;
  const images = Array.from(
    { length },
    (_, k) => `/images/gallery${k + 1}.jpg`
  );

  return (
    <>
      <PagesHeader title='Our Galeery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio
        facilis quisquam voluptate! Ad nisi beatae, minima dolorem doloribus
        ducimus.
      </PagesHeader>
      <S.Gallery>
        <S.Container>
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </S.Container>
      </S.Gallery>
    </>
  );
};

export default Gallery;
