import styled from 'styled-components';

export const PagesHeader = styled.header`
  margin-top: 5rem;
  height: 20rem;
  overflow: hidden;
  border-bottom: 2px solid var(--color-gray-400);


  @media screen and (max-width:600px){
    height: fit-content;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-items: center;
  background:black;
`
export const Image = styled.div`
  position: absolute;
  width: 100%;
  img {
    opacity: 0.5;
  }
`
export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 44%;
  color: var(--color-gray-100);

  h2{
    margin-bottom: 1rem;
  }

  p{
    color: rgba(255,255,255,0.7) ;
  }

  @media screen and (max-width:1024px){
   width : 76%;
  }
  @media screen and (max-width:600px){
   width : var(--container-width-md);
   padding: 3rem 0;

   P{
    font-size: 0.85rem;
   }
  }

`
