import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--color-primary);
  margin-top: 7rem;
  padding-top: 7rem;
  font-size: 0.9rem;
  color: var(--color-gray-100);

  @media screen and (max-width:600px){
    margin-top: 7rem;
  }
`

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 26rem 1fr 1fr 1fr;
  gap: 6rem;

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;

  p{
    margin-top: 0.5rem;
    color: var(--color-gray-200  );

    @media screen and (max-width:600px){
      text-align: center;
    }
  }

  h4{
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }

  @media screen and (max-width:600px){
    align-items: center;
  }
`
export const Socials = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  a{
    background: var(--color-gray-100);
    padding: 0.7rem;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    transition: var(--transition);
     
    &:hover{
      border-color: var(--color-gray-100);
      background-color: transparent;
    }

    svg{
      color: var(--color-gray-600);
    }
  }
`
export const Copywright = styled.div`
  color: var(--color-gray-100);
  text-align: center;
  padding: 1.5rem 0;
  border-top: 2px solid var(--color-primary--variant);
  margin-top: 5rem;
`
