import { Link } from 'react-router-dom';
import * as S from './footer.style';
import Logo from '/images/logo.png';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt='Footer logo' s />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            omnis, velit beatae quo amet in similique quos voluptate accusamus
            ipsa repudiandae eaque.
          </p>
          <S.Socials>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaFacebookSquare />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaTwitterSquare />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaInstagramSquare />
            </a>
          </S.Socials>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
      </S.Container>
      <S.Copywright></S.Copywright>
    </S.Footer>
  );
};

export default Footer;
