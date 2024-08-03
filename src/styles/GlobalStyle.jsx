import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => (theme ? theme.background : '#eeeeee')};
    color: ${({ theme }) => (theme ? theme.text : '#000000')};
}
 
`;

export { GlobalStyles }
