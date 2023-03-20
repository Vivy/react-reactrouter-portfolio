import styled from 'styled-components';

export const NavBar = styled.nav`
  height: 5rem;
  width: 100vw;
  background: var(--color-primary);
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`
export const Button = styled.button`
  display: none;
  @media screen and (max-width: 1024px) {
   display :inline-block ;
   background: transparent;
   font-size: 1.8rem;
   cursor: pointer;
   svg {
    color: var(--color-gray-100);
   }
  }
`
export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
`
export const Img = styled.img`
  width: 7rem;
`

export const NavLinks = styled.ul`
display: flex;
gap: 3.5rem;
align-items: center;
  a{
    transition: var(--transition);
  }
  a:hover{
    color: var(--color-secondary);
  }

  .active-nav{
    position: relative;
  }
  .active-nav::after{
    content: '';
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--color-primary);
    position: absolute;
    left:calc(50%- 0.6rem);
    transform: rotate(45deg);
    margin-top: 0.9rem;
  }

  @media screen and (max-width: 1024px){
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    gap: 0;

    .active-nav, 
    .active-nav::after{
      display: hidden;
    }

    li{
      height: 4rem;
      width: 100%;
      box-shadow: -2rem 2rem 5rem rgba(0,0,0,0.4);
    }

     a {
      background-color: var(--color-primary);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 1rem 5rem 1rem 3rem;
    }
  }

  `

