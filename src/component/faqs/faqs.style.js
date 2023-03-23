import styled from 'styled-components';

export const Faqs = styled.section`
  
`
export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  `
export const Wrapper = styled.div`
margin-top: 4rem;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.5rem 5rem;
align-items: flex-start;

@media screen and (max-width:1024px){
  grid-template-columns: 1fr;
}

@media screen and (max-width:600px){
  gap: 1rem;
  margin-top: 3rem;
}
`
