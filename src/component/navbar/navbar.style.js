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
  display: block;
`

export const NavLinks = styled.ul`
display: flex;
gap: 3.5rem;
align-items: center;
perspective: 400px;

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
  ${({ isShowing }) => isShowing ? 'display:flex;' : 'display:none;'};
  
  a>.active-nav, 
  .active-nav::after{
    display: none;
  }

    li{
      height: 4rem;
      width: 100%;
      box-shadow: -2rem 2rem 5rem rgba(0,0,0,0.5);
      animation: navAnimation 600ms ease forwards;
      transform: rotateX(90deg);
      opacity: 0;
      transform-origin: top;
    }
    li:nth-child(2){
      animation-delay: 200ms;
    }
    li:nth-child(3){
      animation-delay: 400ms;
    }
    li:nth-child(4){
      animation-delay: 600ms;
    }
    li:nth-child(5){
      animation-delay: 800ms;
    }
    li:nth-child(6){
      animation-delay: 1s;
    }
    li:nth-child(7){
      animation-delay: 1.2s;
    }
    @keyframes navAnimation {
      to{
        transform: rotateX(0);
        opacity: 1;
      }
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

