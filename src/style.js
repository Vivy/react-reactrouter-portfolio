import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

 *,
*::before,
*::after{ 
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

:root{
  --primary-hue:210;
  --gray-hue:240;
  --color-primary:hsl(var(--primary-hue), 100%, 50%);
  --color-primary--variant:hsl(var(--primary-hue), 100%, 65%);
  --color-secondary:#ffb116;
  --color-gray-100:hsl(var(--gray-hue),47%,94%);
  --color-gray-200:hsl(var(--gray-hue),26%,75%);
  --color-gray-300:hsl(var(--gray-hue),24%,64%);
  --color-gray-400:hsl(var(--gray-hue),16%,41%);
  --color-gray-500:hsl(var(--gray-hue),44%,25%);
  --color-gray-600:hsl(var(--gray-hue),48%,15%);
  --container--width-lg:80%;
  --container--width-md:90%;
  --transition: all 500ms ease;
}

body{
  font-family: 'Montserrat', sans-serif;
  line-height: 1.7;
  overflow-x:hidden;
  background: var(--color-gray-600);
}

.contrainer{
  width: var(--container--width-lg);
  max-width: 1920px;
  margin-inline: auto;
}
h1,h2,h3,h4,h5{
  line-height: 1.2;
  color:var(--color-gray-100)
}

h1{
  font-size: 3rem;
}

h2{
  font-size: 2rem;
}

a{
  color: var(--color-gray-100);
}

p{
  color: var(--color-gray-300);
}

img{
  display:block;
  width: 100%;
  object-fit: cover;
}

.btn{
    color:var(--color-gray-100);
    width: fit-content;
    margin: 0 auto;
    padding: 0.9rem 2rem;
    background: var(--color-primary);
    border-radius: 1.5rem;
    transition: var(--transition);
    &:hover{
      background: var(--color-secondary);
      color: var(--color-gray-600);
    }
    &.lg{
      padding:1.2rem 3rem;
      border-radius: 2rem;
      font-size: 1.1rem;
    }
    &.sm{
      padding: 0.4rem 1.2rem;
      ;
      font-size: 0.9rem;
    }
    &.sm:hover{
      background:var(--color-gray-100);
    }

  }

section{
    margin-top: 10rem;
  }



  @media screen and (max-width:1024px){
  width: var(--container--width-md);
    
  }

  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.6rem;
  }


  @media screen and (max-width:600px){
    h1{
      font-size: 2.2rem;
      line-height: 1.3;
    }

    section{
      margin-top: 7rem;
    }
  }
`
