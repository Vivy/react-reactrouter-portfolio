import styled from 'styled-components';

export const About = styled.div`
  	
`
export const Story = styled.section`
  `
export const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 10%;
  align-items: center;
  ${({ template }) => template ? 'grid-template-columns: 50% 40% ;' : ''}
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;

  @media screen and (max-width:1024px){
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media screen and (max-width:600px){
    gap: 2rem;
  }
`

export const StoryImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  transform: skew(15deg);
  transition: var(--transition);

  ${({ transform }) => transform ? 'transform:skew(-15deg);' : ''}
  &:hover{
    transform: skew(0);
  }

  @media screen and (max-width:1024px){
    width: 60%;
    grid-row: 1;
  }

  @media screen and (max-width:600px){
    width: 80%;
    margin-inline: auto;
  }
`


export const StoryContent = styled.div`
 

  h1{
    margin-bottom: 2rem;

    @media screen and (max-width:1024px){
      margin-bottom: 1.2rem;
    }
  }

  p{
    margin-bottom: 1rem;
  }
`
