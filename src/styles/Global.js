import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
  }

  body {
      font-size: 16px;
      font-family: sans-serif;
      color: #252525;
      background: #f4f4f4;
  }

  li {
      list-style: none;
  }

  button, input {
      border: none;
  }

  button {
      cursor: pointer;
  }

  a {
      text-decoration: none;
  }

  img {
      max-width: 100%;
      display: block;
  }
`
