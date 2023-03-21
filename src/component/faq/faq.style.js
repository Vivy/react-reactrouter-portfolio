import styled from 'styled-components';

export const Faq = styled.article`
  background: var(--color-gray-500);
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button{
    background: transparent;
    color: var(--color-gray-100);
    font-size: 1.5rem;
  }
  p{
    margin-top: 1.5rem;
  }
`
