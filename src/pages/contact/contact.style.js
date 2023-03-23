import styled from 'styled-components';

export const Contact = styled.section`

`

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  place-items: center;
`
export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 2rem;

  a{
    background: var(--color-primary);
    font-size: 2rem;
    border: 2px solid transparent;
    transition: var(--transition);
    padding: 1.2rem 1.6rem; 
    border-radius: 1.5rem;
    &:hover{
      background: transparent;
      border-color: var(--color-gray-100);
    }
  }

  @media screen and (max-width:600px){
   gap: 1.5rem;
   a{
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 1rem;
   }
  }
`
