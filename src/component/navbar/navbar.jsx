import Logo from '/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import * as S from './navbar.style';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

const NavBar = () => {
  const [close, setClose] = useState(false);
  return (
    <S.NavBar>
      <S.NavContainer>
        <Link to='/' onClick={() => setClose(false)}>
          <S.Img src={Logo} alt='nav logo' />
        </Link>
        {close && (
          <S.NavLinks
          //  className={`${close} ? 'show__nav' : 'hide__nav'`}
          >
            {links.map(({ name, path }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? 'active-nav' : '')}
                    onClick={() => setClose((prev) => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </S.NavLinks>
        )}
        <S.Button onClick={() => setClose((prev) => !prev)}>
          {close ? <TfiClose /> : <FaBars />}
        </S.Button>
      </S.NavContainer>
    </S.NavBar>
  );
};

export default NavBar;
