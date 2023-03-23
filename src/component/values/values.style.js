import styled from 'styled-components';

export const Values = styled.section``

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 38% 50%;
  gap: 12%;

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 4rem;
  }
`
export const Left = styled.div`

`
export const ValuesImage = styled.div`
  filter: saturate(0.25);
  transition: var(--transition);
  &:hover{
    filter: saturate(1);
  }

  @media screen and (max-width:1024px){
    display: none;
  }
`
export const Right = styled.div`
  p{
    margin: 1.5rem 0 5rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem 2.4rem;

  .values__value{
    padding-top: 3.5rem;
    text-align: left;
    position: relative;

    span{
      position: absolute;
      top: -1.5rem;
    }

    @media screen and (max-width:1024px){
      gap: 4rem 3rem;
    }

    @media screen and (max-width:600px){
      width: 84%;
      margin-inline: auto;
    }
    
  }
  
  @media screen and (max-width:600px){
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  `
