import PagesHeader from '../../component/pagesheader/pagesheader';
import * as S from './about.style';
import HeaderImage from '/images/header_bg_1.jpg';
import StoryImage1 from '/images/about1.jpg';
import StoryImage2 from '/images/about2.jpg';
import StoryImage3 from '/images/about3.jpg';

const About = () => {
  return (
    <S.About>
      <PagesHeader title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        soluta excepturi nostrum officiis. Vitae eius commodi fugiat iure
        repudiandae, esse cupiditate quos doloremque.
      </PagesHeader>
      <S.Story>
        <S.StoryContainer>
          <S.StoryImage>
            <img src={StoryImage1} alt='About story image' />
          </S.StoryImage>
          <S.StoryContent>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
              mollitia quis, iste maxime expedita. Explicabo enim optio aliquam
              quas! Ratione, dolores blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              pariatur rem neque soluta omnis voluptate quo sequi porro mollitia
              illum. Sequi, error!
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              odit aliquid minima dignissimos hic molestias fugiat pariatur,
              illum excepturi natus inventore.
            </p>
          </S.StoryContent>
        </S.StoryContainer>
      </S.Story>
      <S.Story>
        <S.StoryContainer direction template>
          <S.StoryContent>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
              mollitia quis, iste maxime expedita. Explicabo enim optio aliquam
              quas! Ratione, dolores blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              pariatur rem neque soluta omnis voluptate quo sequi porro mollitia
              illum. Sequi, error!
            </p>
          </S.StoryContent>
          <S.StoryImage transform>
            <img src={StoryImage2} alt='About vision image' />
          </S.StoryImage>
        </S.StoryContainer>
      </S.Story>
      <S.Story>
        <S.StoryContainer>
          <S.StoryImage>
            <img src={StoryImage3} alt='About mission image' />
          </S.StoryImage>
          <S.StoryContent>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
              mollitia quis, iste maxime expedita. Explicabo enim optio aliquam
              quas! Ratione, dolores blanditiis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              pariatur rem neque soluta omnis voluptate quo sequi porro mollitia
              illum. Sequi, error!
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              odit aliquid minima dignissimos hic molestias fugiat pariatur,
              illum excepturi natus inventore.
            </p>
          </S.StoryContent>
        </S.StoryContainer>
      </S.Story>
    </S.About>
  );
};

export default About;
