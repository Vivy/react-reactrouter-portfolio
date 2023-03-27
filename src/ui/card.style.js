import styled from 'styled-components';

export const Card = styled.article`
  background: var(--color-gray-500);
  border: 2px solid transparent;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 0 3rem 0 3rem;
  transition: var(--transition);

  :hover{
    background: transparent;
    border-color: var(--color-gray-400);
    cursor: default;
    span{
      background: var(--color-secondary);
      color: var(--color-gray-600);
    }
    a{
      background: var(--color-secondary);
      color: var(--color-gray-600);
    }
  }
  span{
    width: 3rem;
    height: 3rem;
    background: var(--color-primary);
    color: var(--color-gray-100);
    font-size: 1.5rem;
    padding: 0.8rem;
    display: grid;
    place-items: center;
    margin-bottom: 1.5rem;
    margin-inline: auto;
    border-radius: 1rem;
    transition: var(--transition);
  }
  
  small{
    margin-top: 1rem;
    display: block;
    font-weight: 300;
    color: var(--color-gray-400);
  }

  a{
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.testimonials {
    position: relative;
    text-align: left;
    margin-top: 5rem;
    p{
      font-style: italic;
      margin: 1rem 0 2rem;
    }
    small{
      margin-top: 0.3rem;
    }
  }

  &.trainer{
    padding: 1rem;

    p{
      margin-top:0.5rem;
    }

    h3{
      margin-top: 2rem;
    }

    @media screen and (max-width:600px){
      width: 90%;
      margin-inline: auto;
    }
  }
`
