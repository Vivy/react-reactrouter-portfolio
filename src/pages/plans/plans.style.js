import styled from 'styled-components';

export const Plans = styled.section`
  @media screen and (max-width:600px){
    width: 90%;
    margin-inline:auto;
  }
`

export const Test = styled.p`
    ${({ available }) => available ? 'color: var(--color-gray-100);' : 'color: var(--color-gray-400);'}

`
export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  h3{
    margin-bottom: 0.8rem;
  }

  small{
    margin-bottom: 2rem;
  }

  h1{
    color: var(--color-primary--variant);
    display: inline;
  }

  h2{
    display: inline;
    color: var(--color-gray-400);
  }

  h4{
    margin-top: 2rem;
  }

  

  button{
    margin-top: 3rem;
    cursor: pointer;
  }

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
