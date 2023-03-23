import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: calc(100vh - 3rem);
  display: grid;
  place-items: center;
  margin-top: 3rem; 


  @media screen and (max-width:1024px){
    height: fit-content;
    padding: 12rem 0;
  }

  @media screen and (max-width:600px){
    margin-top: 0;
    padding: 12rem 0 0 ;
    height: 100vh;
  }
`
export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  gap: 6rem;

  @media screen and (max-width:1024px){
    gap: 0;
  }

  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
  }
`
export const Left = styled.div`
  margin-top: -3rem;
  h4{
    margin-bottom: 1rem;
    color: var(--color-secondary);
    font-weight: 400;
  }
  p{
    margin: 1rem 0 3.5rem;
    font-size: 1.1rem;
  }

`
export const Right = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  div:nth-child(1){
    width: 25rem;
    height: 25rem;
    background: linear-gradient(75deg, var(--color-secondary),transparent );
    border-radius: 50%;
    position: absolute;
    
    @media screen and (max-width:1024px){
      width: 16rem;
      height: 16rem;
    }
    @media screen and (max-width:600px){
      display: none;
    }
  }
  img{
    position: relative;
    @media screen and (max-width:600px){
      display: none;
    }
  }
`
