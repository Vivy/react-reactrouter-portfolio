import Logo from '/images/logo.png';
import { links } from '../../data';
import { Link, useLocation } from 'react-router-dom';
import * as S from './navbar.style';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

const NavBar = () => {
  const [close, setClose] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname, 'path');

  let PI = 3.14159;
  let num = PI.toFixed(3);
  console.log(num);
  let num2 = PI.toPrecision(3);
  console.log(num2);

  let lightSpeed = 186000;
  console.log(lightSpeed.toExponential());
  return (
    <S.NavBar>
      <S.NavContainer>
        <Link to='/' onClick={() => setClose(false)}>
          <S.Img src={Logo} alt='nav logo' />
        </Link>
        <S.NavLinks isShowing={close}>
          {links.map(({ name, path }) => {
            return (
              <li key={name}>
                <S.NavLink
                  to={path}
                  $alabala={pathname === path}
                  onClick={() => setClose((prev) => !prev)}
                >
                  {name}
                </S.NavLink>
              </li>
            );
          })}
        </S.NavLinks>
        <S.Button onClick={() => setClose((prev) => !prev)}>
          {close ? <TfiClose /> : <FaBars />}
        </S.Button>
      </S.NavContainer>
    </S.NavBar>
  );
};

export default NavBar;
