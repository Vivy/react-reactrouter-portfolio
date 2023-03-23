import PagesHeader from '../../component/pagesheader/pagesheader';
import * as S from './contact.style';
import HeaderImage from '/images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <PagesHeader title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nostrum
        veritatis odio.
      </PagesHeader>
      <S.Contact>
        <S.Container>
          <S.Wrapper>
            <a
              href='mailto:somerandommail@gmail.com'
              rel='noreferrer noopener'
              target='_blank'
            >
              {' '}
              <MdEmail />
            </a>
            <a
              href='https://m.me/messenger'
              rel='noreferrer noopener'
              target='_blank'
            >
              {' '}
              <BsMessenger />
            </a>
            <a
              href='https://wa.me/+number'
              rel='noreferrer noopener'
              target='_blank'
            >
              {' '}
              <IoLogoWhatsapp />
            </a>
          </S.Wrapper>
        </S.Container>
      </S.Contact>
    </>
  );
};

export default Contact;
