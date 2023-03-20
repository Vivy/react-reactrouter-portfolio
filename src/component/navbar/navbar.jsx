import Logo from '/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import * as S from './navbar.style';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

const NavBar = () => {
  const [close, setClose] = useState(false);

  return (
    <S.NavBar>
      <S.NavContainer>
        <Link to='/'>
          <S.Img src={Logo} alt='nav logo' />
        </Link>
        {close && (
          <S.NavLinks>
            {links.map(({ name, path }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </S.NavLinks>
        )}
        <S.Button onClick={() => setClose(!close)}>
          {close ? <TfiClose /> : <FaBars />}
        </S.Button>
      </S.NavContainer>
    </S.NavBar>
  );
};

export default NavBar;
