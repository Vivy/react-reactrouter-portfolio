import Logo from '/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import * as S from './navbar.style';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <S.NavBar>
      <div>
        <Link to='/'>
          <img src={Logo} alt='nav logo' />
        </Link>
        <ul>
          {links.map(({ name, path }) => {
            return (
              <li key={name}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button>
          <FaBars />
        </button>
      </div>
    </S.NavBar>
  );
};

export default NavBar;
