import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--color-primary);
  margin-top: 7rem;
  padding-top: 7rem;
  font-size: 0.9rem;
  color: var(--color-gray-100);
`

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 26rem 1fr 1fr 1fr;
  gap: 6rem;
  
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;

  p{
    margin-top: 0.5rem;
  }

  h4{
    margin-bottom: 0.6rem;
    font-size: 1rem;
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

    svg{
      color: var(--color-gray-600);
    }
  }
`
export const Copywright = styled.div`
  
`
