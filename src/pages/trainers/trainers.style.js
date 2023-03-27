import styled from 'styled-components';

export const Trainers = styled.section``

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
export const Content = styled.div``
