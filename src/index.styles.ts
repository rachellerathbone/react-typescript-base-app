import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  whiteColor: boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    color: ${(props: GlobalStyleProps) =>
      props.whiteColor ? 'white' : 'black'};
  }
`;
