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


`
