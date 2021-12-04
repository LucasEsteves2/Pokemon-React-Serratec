import { createGlobalStyle } from "styled-components";
import 'react-credit-cards/es/styles-compiled.css';

export const GlobalStyle = createGlobalStyle`

:root{
    --amarelo:linear-gradient(20deg, #ffe50c 0, #fee300 50%, #fce100 100%);
    --blue:#5429cc;
    

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969CB3;

    --background:linear-gradient(90deg, #efecee 0, #efecee 8.33%, #f0eced 16.67%, #f0eced 25%, #f0eced 33.33%, #f0ecec 41.67%, #f0ecec 50%, #f0ecec 58.33%, #f0eceb 66.67%, #f0eceb 75%, #f0eceb 83.33%, #f0eceb 91.67%, #efecea 100%);
    --shape: #582870;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
background: var(--background) ;
-webkit-font-smoothing:antialiased;
}

//font size:16px padrao
html{
@media(max-width: 1080px){
    font-size:93.75%; //15px
}
@media(max-width: 720px){
    font-size: 87.5%; //14px
}

}


body,input,textarea,button{
    font-family:'Poppins',sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;

}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}






.hasError {
    color: #f44336;
    font-size: 12px;
    margin-top: 10px;
    font-family: 'Verdana Regular';
    font-size: 13px
}

.rccs {
    width: 364px;
    height: 224px;
}

.rccs__card {    
    width: 364px;
    height: 224px;
}

@media only screen and (max-width: 414px) {
  .rccs {
    width: 290px;
    height: 182px;
}

.rccs__card {    
    width: 290px;
    height: 182px;
}
}


`
