import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #fafafa;
    box-sizing: border-box;
    }

    h1,h2,h3 {
      font-family: 'Quicksand', sans-serif;
    }
  `;

  export default GlobalStyle;