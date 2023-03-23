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
        <S.Article>
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
        </S.Article>
        <S.Article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trainers'>Trainers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </S.Article>
        <S.Article>
          <h4>Insights</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Case Studies</Link>
          <Link to='/s'>Events</Link>
          <Link to='/s'>Communities</Link>
          <Link to='/s'>FAQs</Link>
        </S.Article>
        <S.Article>
          <h4>Get In Touch</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/s'>Support</Link>
        </S.Article>
      </S.Container>
      <S.Copywright>
        <small>2023 Vivy &copy; All The Rights In the World</small>
      </S.Copywright>
    </S.Footer>
  );
};

export default Footer;
