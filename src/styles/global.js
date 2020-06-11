import { injectGlobal } from 'styled-components'
import * as palette from './palette'
import 'react-datepicker/dist/react-datepicker.css'
import 'video-react/dist/video-react.css'

// Global styled
// eslint-disable-next-line
injectGlobal`
  html {
    font-size: 10px!important;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 1rem!important;
    font-weight: 300!important;
    font-style: normal!important;
    background: ${palette.primaryBackground}!important;
  }

  input[type="password" i] {
    -webkit-text-security: disc !important;
  }
  p,
  a,
  input,
  span,
  div {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  h1 {
    font-family: 'Open Sans', sans-serif !important;
  }

  ::placeholder, 
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${palette.charcoal};
  }
  
  input[type=text]::-ms-clear {
    display: none;
  }

  .MuiAutocomplete-popper {
    color: red !important;
    font-size: 2em !important;
  }
`
