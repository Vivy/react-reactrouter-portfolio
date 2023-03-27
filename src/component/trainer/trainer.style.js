import styled from 'styled-components';

export const Trainer = styled.div`
  :hover{
    background: var(--color-gray-500);
  }
`
export const Image = styled.div`
  border-radius:0 2rem;
  overflow: hidden;
`
export const Socials = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  a{
    font-size: 0.7rem;
    background: var(--color-gray-600);
    padding: 0.8rem;
    border-radius: 0.7rem;
    transition: var(--transition);
  }
`
