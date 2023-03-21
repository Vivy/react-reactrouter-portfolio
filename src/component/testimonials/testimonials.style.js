import styled from 'styled-components';

export const Testimonials = styled.section`
  width: 50rem;
  margin-inline: auto;
`

export const Container = styled.div`
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;  
`
export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: absolute;
  top: -2rem;
  border: 2px solid transparent;
  left: calc(50% - 2rem);
  box-shadow: 0 1.5rem 2rem rgba(26,26,54,0.4);
  transition: var(--transition);
  &:hover{
    border-radius: 50%;
    border-color: var(--color-gray-400);
  }
`
export const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 2.5rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  button{
    background: transparent;
    cursor: pointer;
  }
  svg{
    fill: var(--color-primary);
    font-size: 1.8rem;
    width: 3rem;
    height: 3rem;
  }

`
