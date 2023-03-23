import styled from 'styled-components';

export const Programs = styled.section`
  margin-top: 4rem;

`
export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
 
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 3rem;
  margin-top: 4rem;

  @media screen  and (max-width:1024px){
   grid-template-columns:1fr 1fr; 
  }

  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }
`
