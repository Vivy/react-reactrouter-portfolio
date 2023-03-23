import styled from 'styled-components';

export const Gallery = styled.section``

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  article{
    border: 1rem solid transparent;
    transition:var(--transition);
    
    &:hover{
      border-color:var(--color-gray-500);
    }
  }

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    article{
      border: 0;
    }
  }

  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 1rem;
  }

`
