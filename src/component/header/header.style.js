import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: calc(100vh - 3rem);
  display: grid;
  place-items: center;
  margin-top: 3rem;
`
export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
  gap: 6rem;
`
export const Left = styled.div`
  margin-top: -3rem;
  h4{
    margin-bottom: 1rem;
    color: var(--color-secondary);
    font-weight: 400;
  }
  p{
    margin: 1rem 0 3.5rem;
    font-size: 1.1rem;
  }

`
export const Right = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  div:nth-child(1){
    width: 25rem;
    height: 25rem;
    background: linear-gradient(75deg, var(--color-secondary),transparent );
    border-radius: 50%;
    position: absolute;
  }
  img{
    position: relative;
  }
`
